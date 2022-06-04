const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;
const Role = db.roles;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const UserService = require('../services/user.services');
const BusinessService = require('../services/business.services');

const { validateLoginData, validateSignupData, validateBusinessData } = require('../utils/validator');


exports.signup = async (req, res) => {
  let { isOwner } = req.body;
  let { valid: valid1, errors: errors1 } = validateSignupData(req.body);
  if(!valid1) return res.status(404).json({ message: { text: 'Something went wrong in user!', type: 'error' }, errors1 });

  

  let { business_name, business_address, business_contact, business_email_address, firstName, lastName, contact,  gender, roles, birthDate, address, username, email_address, password } = req.body;

  let bus = isOwner && await BusinessService.createRecord({
      name: business_name,
      address: business_address,
      contact: business_contact,
      email_address: business_email_address
  });

  const user = new User({
    firstName,
    lastName,
    birthDate,
    contact,
    address,
    gender,
    username,
    email_address,
    password: bcrypt.hashSync(password, 8),
    business: isOwner ? bus._id : null 
  });



  user.save( async (err, user) => {
    if (err) {
      res.status(500).send({  message: { text: 'Something went wrong!', type: 'error' }});
      return;
    }

   await BusinessService.updateRecord(bus._id, {owner: user._id})

    if (roles) {
      Role.find(
        {
          title: { $in: roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: { text: 'Something went wrong!', type: 'error' } });
            return;
          }
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({  message: { text: 'Something went wrong!', type: 'error' }});
              return;
            }
            res.send({ message: { text: "User was registered successfully!", type: 'success'  }});
          });
        }
      );
    } else {
      Role.findOne({ title: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};


exports.signin = (req, res) => {

  let { valid, errors } = validateLoginData(req.body);
  if(!valid) return res.status(404).json({ message: { text: 'Something went wrong!', type: 'error' }, errors });


  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: { text: "User Not found.", type: 'warning'} });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: { text: "Invalid Password!", type: 'error'}
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      var authorities = [];
      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].title.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email_address: user.email_address,
        roles: authorities,
        accessToken: token
      });
    });
};


exports.getAuthUser = async (req, res) => {
  let { userId } = req;
    console.log(userId)
    let user = await UserService.getById(userId);
    res.status(200).json({message: 'Success', userId, user})
}



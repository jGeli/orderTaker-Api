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
  let { valid, errors } = validateSignupData(req.body);
  if(!valid) return res.status(404).json({ message: { text: 'Something went wrong in user!', type: 'error' }, errors });
  let { password, roles, firstName, lastName, email_address, contact, username } = req.body;
  
  let user = new User({

    ...res.body,
    email_address: email_address,
    firstName: firstName,
    lastName: lastName,
    contact: contact,
    username: username,
    password: bcrypt.hashSync(password, 8)
  });


  user.save( async (err, user) => {
    if (err) {
      res.status(500).send({  message: { text: 'Something went wrong!', type: 'error' }});
      return;
    }


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
     $or: [{
       username: req.body.username,
     }, {
       email_address: req.body.email_address
     }] 
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      console.log(user)
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



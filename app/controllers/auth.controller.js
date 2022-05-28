const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;
const Role = db.roles;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const UserService = require('../services/user.services');
const { validateLoginData, validateSignupData } = require('../utils/validator');


exports.signup = (req, res) => {

  let { valid, errors } = validateSignupData(req.body);
  if(!valid) return res.status(404).json({ message: { text: 'Something went wrong!', type: 'error' }, errors });


  const user = new User({
    username: req.body.username,
    email_address: req.body.email_address,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (req.body.roles) {
      Role.find(
        {
          title: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            res.send({ message: "User was registered successfully!" });
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



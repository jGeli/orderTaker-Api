const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;
const Role = db.roles;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const UserService = require('../services/user.services');
const BusinessService = require('../services/business.services');
const CustomerService = require('../services/customer.services');
const ProductService = require('../services/product.services');


const { validateLoginData, validateSignupData, validateBusinessData } = require('../utils/validator');
const { now } = require("mongoose");
const { fullNamer } = require("../utils/formatter");


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
       username: req.body.username ? req.body.username : req.body.email_address ? req.body.email_address :'n',
     }, {
       email_address: req.body.email_address ? req.body.email_address : req.body.username ? req.body.username : 'n'
     }] 
  })
    .populate("roles", "-__v")
    .exec( async (err, user) => {
      // console.log(user)
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

      

      var token = jwt.sign({ id: user.id, business: user.business }, config.secret, {
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
        business: user.business,
        accessToken: token,
        status: user.status
      });
    });
};


exports.getAuthUser = async (req, res) => {
  let { userId, business } = req;
    let user = await UserService.getById(userId);
    let details  = await BusinessService.getById(business);
    
    let businessObject = {
          ...details._doc,
          users: await UserService.getAll({business: business}),
          products: await ProductService.getAll({business: business}),
          customers: await CustomerService.getAll({business: business})
    }
    res.status(200).json({message: 'Success' , business: businessObject, user})
}


exports.handleSuspendUser = async (req, res) => {
  let { userId } = req;
  try{
    let { id }= req.params;
    let susp = await UserService.getById(userId);

    let user = await UserService.getById(id);
    if(!user){
     return res.status(404).json({message: { text: 'User Not Found!', type: 'error' }})
    }

    if(user.suspended_at){
       await UserService.updateRecord(id, { 
              suspended_at: null,
              suspended_by: null,
              status: 'inactive'
            });
    return res.status(200).json({message: { text: 'User Unsuspended!'}})

    } else {
      await UserService.updateRecord(id, { 
        suspended_at: new Date(),
        suspended_by: fullNamer(susp.firstName, susp.lastName),
        status: 'suspended'
      });
      return res.status(200).json({message: { text: 'User Suspended!'}})
    }
  }catch(err){
    res.status(400).json({message: { text: 'Something went wrong!', type: 'error' }, error: err})

  }
}


  exports.logout = async (req, res) => {
      const { userId } = req;
    try{
    let user = await UserService.getById(userId);
    if(!user){
      res.status(404).json({message: { text: 'User Not Found!', type: 'error' }})
    } else {
    await UserService.updateRecord(userId, {status: "inactive"})
    res.status(200).json({message: { text: 'your account has been logged out'}})
    }
    // console.log(user)
  }catch(err){
    res.status(400).json({message: { text: 'Something went wrong!', type: 'error' }, error: err})

  }
}




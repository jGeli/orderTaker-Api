const db = require("../models");
const ROLES = db.ROLES;
const User = db.users;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({message: { text: "Something went wrong!" , type: 'error' }});
      return;
    }
    if (user) {
      res.status(400).send({message: { text: "Failed! Username is already in use!" , type: 'error' }});
      return;
    }
    // Email
    User.findOne({
      email_address: req.body.email_address
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: { text: "Something went wrong!" , type: 'error' }});  
        return;
      }
      if (user) {
        res.status(400).send({ message: { text: "Failed! Email is already in use!" , type: 'error' } });
        return;
      }
      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }
  next();
};
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
module.exports = verifySignUp;
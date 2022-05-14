const UserService = require('../services/user.services');


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {

    res.status(200).send("Moderator Content.");
  };


  exports.getAllUsers = (req, res) => {
      try{
          let users = UserService.getAll();
          
      }catch(err) {
        console.log(err)
        res.status(400).json({message: 'Something went wrong!'})
      }


  }
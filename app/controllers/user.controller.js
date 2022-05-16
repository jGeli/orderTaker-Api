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


  exports.getAllUsers = async (req, res) => {
      try{
          let users = await UserService.getAll();
          res.status(200).json({count: users.length, users})
      }catch(err) {
        console.log(err)
        res.status(400).json({message: 'Something went wrong!'})
      }


  }


  exports.getUserById = async (req, res) => {
    let { id } = req.params;
    try{
        let user = await UserService.getById(id);
        if(!user){
          return res.status(400).json({message: `Can't Find User with id ${id} of this shit.`})

        }
        res.status(200).json(user)
    }catch(err) {
      console.log(err)
      res.status(400).json({message: 'Something went wrong!'})
    }


}


exports.deleteUserById = async (req, res) => {
  let { id } = req.params;
  try{
      let user = await UserService.deleteRecord(id);
      if(!user){
        return res.status(400).json({message: `Can't Delete User with id ${id} of this shit.`})

      }
      res.status(200).json(user)
  }catch(err) {
    console.log(err)
    res.status(400).json({message: 'Something went wrong!'})
  }


}
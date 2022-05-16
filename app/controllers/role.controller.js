const RoleServices = require('../services/role.services');


  exports.handleCreate = async (req, res) => {

    let resp = await RoleServices.createRecord(req.body) 

    res.status(200).json({message: "Created Successfully", data: resp});
  };

  exports.handleGetById = (req, res) => {
    res.status(200).send("User Content.");
  };

  exports.handleGetAll = async (req, res) => {
    let resp = await RoleServices.getAll(); 
    res.status(200).json({message: "Fetch Successfully", data: resp});
  };

  exports.handleDeleteById = (req, res) => {
    res.status(200).send("Moderator Content.");
  };


  exports.handleUpdate = async (req, res) => {
      try{
          let users = await UserService.getAll();
          res.status(200).json({count: users.length, users})
      }catch(err) {
        console.log(err)
        res.status(400).json({message: 'Something went wrong!'})
      }
  }


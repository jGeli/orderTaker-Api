const { users } = require('../models');
const UserServices = require('../services/user.services');
const { validateUserData } = require('../utils/validator');




  exports.handleCreate = async (req, res) => {

    try {
      
      

     
      let { valid, errors } = validateUserData(req.body);
      if (!valid) return res.status(400).json({ message: 'Something went wrong!', errors })

  
      
      let resp = await UserServices.createRecord(req.body)
      return res.status(200).json({ message: "Created Successfully", data: resp });
    } catch (err) {
      res.status(400).json({ message: "Something went wronged!", errors: err });
    }

  };



  exports.handleGetById = async (req, res) => {
    let { id } = req.params;
      resp = await UserServices.getById(id);
    res.status(200).json({message: "Fetch Success", data: resp});
  };

  exports.handleGetAll = async (req, res) => {
    let resp = await UserServices.getAll(); 
    res.status(200).json({message: "Fetch Successfully", data: resp});
  };

  exports.handleDeleteById = async (req, res) => {
    let { id } = req.params;
    let resp = await UserServices.deleteRecord(id)


    res.status(200).json({message: "Deleted Successfully", data: resp});
  };


  exports.handleUpdateById = async (req, res) => {
    let { id } = req.params;

    try{
          let resp = await UserServices.updateRecord(id, req.body);
          res.status(200).json({message: "Updated Successfully", data: resp});
        }catch(err) {
        console.log(err)
        res.status(400).json({message: 'Something went wrong!'})
      }
  }


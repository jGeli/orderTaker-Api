const RoleServices = require('../services/role.services');
const { validateRoleData } = require('../utils/validator');

  exports.handleCreate = async (req, res) => {
      
    try{

   let { title } = req.body; 


    let { valid, errors } = validateRoleData(req.body);
    if(!valid) return res.status(400).json({message: 'Something went wrong!', errors})
    
    let roles = await RoleServices.getAll({title: title});


    if(roles.length !== 0) return res.status(400).json({message: 'Title Already Exists!', errors})

    let resp = await RoleServices.createRecord(req.body) 
   return res.status(200).json({message: "Created Successfully", data: resp});
  }catch(err) {
    res.status(400).json({message: "Something went wronged!", errors: err});
  }

  };

  exports.handleGetById = async (req, res) => {
    try{
    let { id } = req.params;
      resp = await RoleServices.getById(id);
    res.status(200).json({message: "Fetch Success", data: resp});
  } catch(err) {
    
    res.status(400).json({message: "Something went wronged!", errors: err});
  }

  };

  exports.handleGetAll = async (req, res) => {
    let resp = await RoleServices.getAll(); 
    res.status(200).json({message: "Fetch Successfully", data: resp});
  };

  exports.handleDeleteById = async (req, res) => {
    let { id } = req.params;
    let resp = await RoleServices.deleteRecord(id)


    res.status(200).json({message: "Deleted Successfully", data: resp});
  };


  exports.handleUpdateById = async (req, res) => {
    let { id } = req.params;

    try{
          let resp = await RoleServices.updateRecord(id, req.body);
          res.status(200).json({message: "Updated Successfully", data: resp});
        }catch(err) {
        console.log(err)
        res.status(400).json({message: 'Something went wrong!'})
      }
  }


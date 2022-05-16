const RoleServices = require('../services/role.services');


  exports.handleCreate = async (req, res) => {

    let resp = await RoleServices.createRecord(req.body) 

    res.status(200).json({message: "Created Successfully", data: resp});
  };

  exports.handleGetById = async (req, res) => {
    let { id } = req.params;
      resp = await RoleServices.getById(id);
    res.status(200).json({message: "Fetch Success", data: resp});
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


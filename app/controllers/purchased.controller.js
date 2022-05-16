const PurchasesServices = require('../services/purchased.services');


  exports.handleCreate = async (req, res) => {

    let resp = await PurchasesServices.createRecord(req.body) 

    res.status(200).json({message: "Created Successfully", data: resp});
  };

  exports.handleGetById = async (req, res) => {
    let { id } = req.params;
      resp = await PurchasesServices.getById(id);
    res.status(200).json({message: "Fetch Success", data: resp});
  };

  exports.handleGetAll = async (req, res) => {
    let resp = await PurchasesServices.getAll(); 
    res.status(200).json({message: "Fetch Successfully", data: resp});
  };

  exports.handleDeleteById = async (req, res) => {
    let { id } = req.params;
    let resp = await PurchasesServices.deleteRecord(id)


    res.status(200).json({message: "Deleted Successfully", data: resp});
  };


  exports.handleUpdateById = async (req, res) => {
    let { id } = req.params;

    try{
          let resp = await PurchasesServices.updateRecord(id, req.body);
          res.status(200).json({message: "Updated Successfully", data: resp});
        }catch(err) {
        console.log(err)
        res.status(400).json({message: 'Something went wrong!'})
      }
  }


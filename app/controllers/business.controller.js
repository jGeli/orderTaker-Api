const BusinessServices = require('../services/business.services');
const { validateBusinessData } = require('../utils/validator');

exports.handleCreate = async (req, res) => {

    try {

        let { valid, errors } = validateBusinessData(req.body);
        if (!valid) return res.status(400).json({ message: 'Something went wrong!', errors })

        let resp = await BusinessServices.createRecord(req.body)
        return res.status(200).json({ message: "Created Successfully", data: resp });
    } catch (err) {
        res.status(400).json({ message: "Something went wronged!", errors: err });
    }

};
exports.handleGetById = async (req, res) => {
    let { id } = req.params;
    resp = await BusinessServices.getById(id);
    res.status(200).json({ message: "Fetch Success", data: resp });
};

exports.handleGetAll = async (req, res) => {
    let resp = await BusinessServices.getAll();
    res.status(200).json({ message: "Fetch Successfully", data: resp });
};

exports.handleDeleteById = async (req, res) => {
    let { id } = req.params;
    let resp = await BusinessServices.deleteRecord(id)


    res.status(200).json({ message: "Deleted Successfully", data: resp });
};


exports.handleUpdateById = async (req, res) => {
    let { id } = req.params;

    try {
        let resp = await BusinessServices.updateRecord(id, req.body);
        res.status(200).json({ message: "Updated Successfully", data: resp });
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: 'Something went wrong!' })
    }
}


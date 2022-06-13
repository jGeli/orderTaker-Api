var bcrypt = require("bcryptjs");
const UserServices = require('../services/user.services');
const BusinessServices = require('../services/business.services');

const { validateUserData } = require('../utils/validator');
const { withFullNames } = require("../utils/formatter");


exports.handleCreate = async (req, res) => {
  const { business, userId } = req;
      // const business = req.business;
      // const userId = req.userId;
  try {


    let { valid, errors } = validateUserData({ ...req.body, business_id: business});
    if (!valid) return res.status(400).json({ message: 'Something went wrong!', errors })
    let { password, roles, firstName, lastName, email_address, contact, username, dpUrl, gender, address, birthDate} = req.body;


    let resp = await UserServices.createRecord({ 
      ...req.body,
    //  roles: roles,
     firstName: firstName,
     lastName: lastName,
     email_address: email_address,
     contact: contact,
     username: username,
     business: business,
     password: bcrypt.hashSync(password, 8),
     dpUrl: dpUrl,
     address: address,
     gender: gender,
     birthDate: birthDate
    })

    // console.log(roles)
        resp.roles = roles;

    // resp.roles.push(roles[0]);
    resp.save();


    return res.status(200).json({ message: "Created Successfully", data: resp });
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wronged!", errors: err });
  }

};



exports.handleGetById = async (req, res) => {
  try {

  let { id } = req.params;
  let resp = await UserServices.getById(id);
  res.status(200).json({ message: "Fetch Success", data: resp });
   } catch (err) {
    res.status(400).json({ message: "Something went wronged!", errors: err });
  }
};

exports.handleGetAll = async (req, res) => {
  let { business } = req;
  let resp = await UserServices.getAll({ business: business});
  let userFull = withFullNames(resp);
  res.status(200).json({ message: "Fetch Successfully", data: userFull });
};

exports.handleDeleteById = async (req, res) => {
  let { id } = req.params;
  let resp = await UserServices.deleteRecord(id)


  res.status(200).json({ message: "Deleted Successfully", data: resp });
};


exports.handleUpdateById = async (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  try {
    let resp;

    if(password){
      resp = await UserServices.updateRecord(id, { ...req.body, 
        password: bcrypt.hashSync(password, 8),
      });
    } else {
      resp = await UserServices.updateRecord(id, req.body);
    }
    res.status(200).json({ message: "Updated Successfully", data: resp });
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'Something went wrong!' })
  }
}


const db = require("../../models");
const Businesses = db.businesses;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// const { validateLoginData } = require('../utils/validators')
// const { validateSignupData } = require('../utils/validators')


exports.createRecord = async (req, res) => {
      Businesses.create(req.body)
      .then
      (business => {
      console.log(business)
      res.send({message : "business created succesfully"});
      })
      .catch
      (err => {
      console.log(err);
      res.status(500).send ({message: err.message});
      });
    }


exports.updateRecordById = async (req, res) => {  
      let { id } = req.params;
      Businesses.update(req.body, {where: { id }})
      .then (business => {
      console.log(business)
      res.send({message: "business updated succesfully"})
      })

      .catch(err => {
      console.log(err)
      res.status(500).send({message: err.message})
      })
  }

exports.getAllRecords = async (req, res) => {
      Businesses.findAll({ where: {deletedAt: {
      [Op.is] : null
  } }})
      .then(doc => {
      console.log(doc)
      res.send(doc)
      })
      .catch(err => {
      console.log(err)
      res.status(500).send({message: err.message})
  })
  }


exports.getRecordById = async (req, res) => {
      let {id} = req.params;
      Businesses.findByPk(id, {where: {deletedAt: {
      [Op.ne]: null
  } }})
      .then(business => {
      console.log(business)
      res.send(business)
    })
      .catch(err => {
      console.log(err)
      res.status(500).send({message: err.message})
  })
  }

exports.deleteRecordById = async (req, res) => {
    let {id} = req.params
      Businesses.update({deletedAt: new Date ()}, {where: {id}})

    .then(business => {
      console.log(business)
      res.send({message: "business data deleted succesfully"})
    })

    
  }
  
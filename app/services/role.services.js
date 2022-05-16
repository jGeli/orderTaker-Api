const db = require('../models');

const Role = db.role;

class RoleServices{

    static async createRecord(prop){
        const { title, notes } = prop

        let resp =  await Role.create({ title, notes });
        return resp
  }


        
   static async getAll(prop = {}){
          let resp =  await Role.find({ ...prop, isDeleted: false });
          return resp
    }

    static async getById(id){
        try{
            let resp = await Role.findById(id);
            return resp;
        } catch(err){
            return false
        }
    }

    static async deleteRecord(id){
        let resp = await Role.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = RoleServices;
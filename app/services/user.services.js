const db = require('../models');

const User = db.users;

class UserServices {

    static async createRecord(prop) {
        const { username, email_address, password,notes, role,notification, business } = prop

        let resp = await User.create({ username, email_address, password, notes, role, notification, business });
        return resp
    }

    static async updateRecord(id, data = {}){
        let resp = await User.findByIdAndUpdate(id, { ...data });
        return resp;
    }


        
   static async getAll(prop = {}){
          let resp =  await User.find({ ...prop, isDeleted: false });
          return resp
    }

    static async getById(id){
        try{
            let resp = await User.findById(id);
            return resp;
        } catch(err){
            return false
        }
    }

    static async deleteRecord(id){
        let resp = await User.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = UserServices;
const db = require('../models');

const User = db.users;

class UserServices {
    static async createRecord(prop) {
        const { username, email_address, password } = prop

        let resp = await User.create({ username, email_address, password
});
        return resp
    }

<<<<<<< HEAD
=======
    static async updateRecord(id, data = {}){
        let resp = await User.findByIdAndUpdate(id, { ...data });
        return resp;
    }
>>>>>>> 71e863dc7d4fefc0b30ce2fa638674661cee2c04


<<<<<<< HEAD


    static async getAll(prop = {}) {
        let resp = await User.find({ ...prop, isDeleted: false });
        return resp;
=======
        
   static async getAll(prop = {}){
          let resp =  await User.find({ ...prop, isDeleted: false }).populate('roles');
          ;
          return resp
>>>>>>> 71e863dc7d4fefc0b30ce2fa638674661cee2c04
    }

    static async getById(id){
        try{
            let resp = await User.findById(id).populate('roles');
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await User.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = UserServices;
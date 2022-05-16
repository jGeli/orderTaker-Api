const db = require('../models');

const User = db.user;

class UserServices{
        
   static async getAll(prop){
          let users =  await User.find({ isDeleted: false });
          return users
    }

    static async getById(id){
        try{
            let user = await User.findById(id);
            return user;
        } catch(err){
            return false
        }
    }

    static async deleteRecord(id){
        let user = await User.findByIdAndUpdate(id, { isDeleted: true });
        return user;
    }
}


module.exports = UserServices;
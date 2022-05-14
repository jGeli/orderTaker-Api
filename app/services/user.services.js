const db = require('../models');

const User = db.user;



class UserServices{
        
   static async getAll(){
          let users =  await User.find({});

          return users
    }
    static async getById(id){
        let user = await User.findById(id);
        return user;
    }

}


module.exports = UserServices;
const db = require('../models');

const User = db.users;

class UserServices {
    static async createRecord(prop) {

        let resp = await User.create(prop);
        return resp
    }

    static async updateRecord(id, data = {}){
        let resp = await User.findByIdAndUpdate(id, { ...data }, {new: true});
        return resp;
    }


        
   static async getAll(prop = {}){
          let resp =  await User.find({ ...prop, isDeleted: false }).populate(['roles', 'business']);
          return resp
    }

    static async getById(id){
        try{
            let resp = await User.findById(id).populate([
                                                         'roles',
                                                         'notifications',
                                                         'business'
                                                        ]);
            return resp;
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    static async deleteRecord(id) {
        let resp = await User.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }

}


module.exports = UserServices;
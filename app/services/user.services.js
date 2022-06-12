const db = require('../models');

const User = db.users;

class UserServices {
    static async createRecord(prop) {

        let resp = await User.create(prop);
        return resp
    }

    static async updateRecord(id, data = {}){
        let resp = await User.findByIdAndUpdate(id, { ...data }, {new: true}).select({createdAt: 0, updatedAt: 0});
        return resp;
    }


        
   static async getAll(prop = {}){
          let resp =  await User.find({ ...prop, isDeleted: false }).select({createdAt: 0, updatedAt: 0,  password: 0, isSuspended: 0, isDeleted: 0}).populate(['roles']);
          return resp
    }

    static async getById(id){
        try{
            let resp = await User.findById(id).populate(['roles', 'notifications', 
            {
                path: 'business',
                model: 'business',
                select: { '__v': 0, 'isBan':0, 'isDeleted': 0}
               
            }
        ]);
            return resp;
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    static async deleteRecord(id) {
        let resp = await User.findByIdAndUpdate(id, { isDeleted: true })
        .select({createdAt: 0, updatedAt: 0,  password: 0, isSuspended: 0, isDeleted: 0});
        return resp;
    }

}


module.exports = UserServices;
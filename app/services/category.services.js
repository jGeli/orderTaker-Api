const db = require('../models');

const Category = db.categories;

class CategoryServices {

    static async createRecord(prop) {
        const { name, description, notes
} = prop

        let resp = await Category.create({ name, description, notes });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Category.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Category.find({ ...prop, isDeleted: false });
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Category.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Category.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = CategoryServices;
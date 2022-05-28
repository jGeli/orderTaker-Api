const db = require('../models');

const Product = db.products;

class ProductServices {

    static async createRecord(prop) {
        const { name, description, type, categories_id, notes } = prop

        let resp = await Product.create({ name, description, type, categories_id, notes });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Product.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Product.find({ ...prop, isDeleted: false });
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Product.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Product.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = ProductServices;
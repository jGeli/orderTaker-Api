const db = require('../models');

const Business = db.business;

class BusinessServices {

    static async createRecord(prop) {
        const { name, address, contact, email_address, type, notes, purchases, users, inventories, orders, payments, customers } = prop

        let resp = await Business.create({ name, address, contact, email_address, type, notes, purchases, users, inventories, orders, payments, customers });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Business.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Business.find({ ...prop, isDeleted: false }).populate(['purchases', 'users', 'inventories', 'orders', 'payments', 'customers']);
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Business.findById(id).populate(['purchases', 'users', 'inventories', 'orders', 'payments', 'customers']);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Business.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = BusinessServices;
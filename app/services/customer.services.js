const db = require('../models');

const Customer = db.customers;

class CustomerServices {

    static async createRecord(prop) {
        const { firstName, lastName, birthDate, age, contact, address, gender, notes } = prop

        let resp = await Customer.create({ firstName, lastName, birthDate, age, contact, address, gender, notes
});
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Customer.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Customer.find({ ...prop, isDeleted: false });
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Customer.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Customer.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = CustomerServices;
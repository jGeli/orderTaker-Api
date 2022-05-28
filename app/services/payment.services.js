const db = require('../models');

const Payment = db.payments;

class PaymentServices {

    static async createRecord(prop) {
        const { order_id, customer_id, business_id, description, amount, type, receiveBy } = prop

        let resp = await Payment.create({ order_id, customer_id, business_id, description, amount, type, receiveBy });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Payment.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Payment.find({ ...prop, isDeleted: false });
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Payment.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Payment.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = PaymentServices;
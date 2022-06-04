const { business } = require('../models');
const db = require('../models');

const Payment = db.payments;

class PaymentServices {

    static async createRecord(prop) {
        const {orders, customers, business, description, amount, type, receivedBy, notes } = prop

        let resp = await Payment.create({ orders, customers, business, description, amount, type, receivedBy, notes });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Payment.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Payment.find({ ...prop, isDeleted: false })
            .populate(['orders', 'customers', 'business']);
        ;
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Payment.findById(id).populate(['orders', 'customers', 'business']);
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
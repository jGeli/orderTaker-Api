const db = require('../models');

const Order = db.orders;

class OrderServices {

    static async createRecord(prop) {
        const { description, order_no, order_items, type, total_amount, customers, recordedBy, notes} = prop

        let resp = await Order.create({ description, order_no, order_items, type, total_amount, customers, recordedBy, notes});
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Order.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Order.find({ ...prop, isDeleted: false })
            .populate(['order_items', 'customers']);
        ;
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Order.findById(id).populate(['order_items', 'customers']);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Order.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = OrderServices;
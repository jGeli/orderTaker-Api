const db = require('../models');

const Order_item = db.order_items;

class Order_itemServices {

    static async createRecord(prop) {
        const { inventory_id, qty, price, subtotal, notes } = prop

        let resp = await Order_item.create({ inventory_id, qty, price, subtotal, notes
});
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Order_item.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Order_item.find({ ...prop, isDeleted: false });
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Order_item.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Order_item.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = Order_itemServices;
const db = require('../models');

const Purchases = db.purchases;

class PurchasesServices {

    static async createRecord(prop) {
        const { product_id, qty, price, total, type, purchaseBy, notes } = prop

        let resp = await Purchases.create({ product_id, qty, price, total, type, purchaseBy, notes });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Purchases.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Purchases.find({ ...prop, isDeleted: false });
        return resp;
    }

    static async getById(id) {
        try {
            let resp = await Purchases.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Purchases.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = PurchasesServices;
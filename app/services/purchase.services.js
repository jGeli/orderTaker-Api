const db = require('../models');

const Purchase = db.purchases;

class PurchaseServices {

    static async createRecord(prop) {
        const { product_id, qty, price, total, type, purchaseBy, notes } = prop

        let resp = await Purchase.create({ product_id, qty, price, total, type, purchaseBy, notes });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Purchase.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}){
        let resp = await Purchase.find({ ...prop, isDeleted: false })
            .populate('products');
        
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Purchase.findById(id).populate('products');
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Purchase.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = PurchaseServices;
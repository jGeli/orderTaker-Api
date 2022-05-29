const db = require('../models');

const Inventory = db.inventories;

class InventoryServices {

    static async createRecord(prop) {
        const { product_id, purchases, description, inStocks, price, notes } = prop

        let resp = await Inventory.create({ product_id, purchases, description, inStocks, price, notes
});
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Inventory.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Iventory.find({ ...prop, isDeleted: false })
            .populate('products', 'purchases', 'pricings' );
        ;
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Inventory.findById(id).populate('products', 'purchases', 'pricings');
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Inventory.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = InventoryServices;
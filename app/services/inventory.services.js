const db = require('../models');

const Inventory = db.inventories;

class InventoryServices {

    static async createRecord(prop) {
        const { products, purchases, description, inStocks, pricings, notes } = prop

        let resp = await Inventory.create({ products, purchases, description, inStocks, pricings, notes
});
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Inventory.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Inventory.find({ ...prop, isDeleted: false })
            .populate(['products', 'purchases', 'pricings']);
        ;
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Inventory.findById(id)
            .populate([
                'products',
                 'purchases',
                  'pricings'
                  ]);
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
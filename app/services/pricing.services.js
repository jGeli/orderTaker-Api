const db = require('../models');

const Pricing = db.pricings;

class PricingServices {

    static async createRecord(prop) {
        const { name, description, price, notes } = prop

        let resp = await Pricing.create({ name, description, price, notes });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Pricing.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Pricing.find({ ...prop, isDeleted: false });
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Pricing.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Pricing.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = PricingServices;
const db = require('../models');

const Notification = db.notifications;

class NotificationServices {

    static async createRecord(prop) {
        const { title, content, type, status, notes } = prop

        let resp = await Notification.create({ title, content, type, status, notes });
        return resp
    }


    static async updateRecord(id, data = {}) {
        let resp = await Notification.findByIdAndUpdate(id, { ...data });
        return resp;
    }



    static async getAll(prop = {}) {
        let resp = await Notification.find({ ...prop, isDeleted: false });
        return resp
    }

    static async getById(id) {
        try {
            let resp = await Notification.findById(id);
            return resp;
        } catch (err) {
            return false
        }
    }

    static async deleteRecord(id) {
        let resp = await Notification.findByIdAndUpdate(id, { isDeleted: true });
        return resp;
    }
}


module.exports = NotificationServices;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
// db.notification = require('./notification.model');
// db.business = require('./business.model');
// db.purchases = ("./purchases.model");
// db.product = ("./products.model");
// db.business = ("./business.model");
// db.notification = ("./notification.model");
// db.inventory = require ("./inventory.model");
// db.payment = require ("./payment.model")
// db.customer = require ("./customer.model")
db.category = require ("./category.model")
// db.order_item = require ("./order_item.model")
// db.order = require ("./order.model")





db.ROLES = ["user", "admin", "moderator"];
module.exports = db;
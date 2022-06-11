const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.users = require("./user.model.js");
db.roles = require("./role.model.js");
db.notifications = require('./notification.model.js');
db.businesses = require("./business.model.js");
db.purchases = require("./purchase.model.js");
db.payments = require ("./payment.model.js")
db.products = require("./product.model.js");
db.inventories = require ("./inventory.model.js");
db.customers = require ("./customer.model.js")
db.categories = require ("./category.model.js")
db.order_items = require ("./order_item.model.js")
db.orders = require ("./order.model.js")
db.pricings = require("./pricing.model.js")





db.ROLES = ["super", "admin", "cashier", "user"];
module.exports = db;
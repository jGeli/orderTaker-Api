const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.users = require("./user.model");
db.roles = require("./role.model");
db.notifications = require('./notification.model');
db.businesses = require("./business.model");
db.purchases = require("./purchased.model");
db.payments = require ("./payment.model")
db.products = require("./product.model");
db.inventories = require ("./inventory.model");
db.customers = require ("./customer.model")
db.categories = require ("./category.model")
db.order_items = require ("./order_item.model")
db.orders = require ("./order.model")





db.ROLES = ["user", "admin", "moderator"];
module.exports = db;
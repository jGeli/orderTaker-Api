const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./user.schema");
db.role = require("./role.schema");
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;
require('dotenv').config();

const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.RESOURCE_PATH)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  var upload = multer({ storage: storage });

  module.exports = upload;
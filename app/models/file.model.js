const mongoose = require("mongoose");
const file = mongoose.model(
  "files",
  new mongoose.Schema({
    fileName: String,
    originalName: String,
    url: String,
    fileSize: String,
    fileFormat: String,
    fileType: String,
    isDeleted: {
      type: Boolean,
      default: false
    }

  },
    { timestamps: true }
  )

);
module.exports = file;


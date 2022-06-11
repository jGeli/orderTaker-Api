require('dotenv').config();
const db = require("../models");
const fs = require('fs');

const FileDoc =  db.filedoc;


exports.uploadFile = (req, res) => {
    const { originalname, mimetype, filename, size } = req.file;
    const { type } = req.params;
   FileDoc.create({
        fileName: filename,
        originalName: originalname,
        url: `${process.env.SERVER_URL}${filename}`,
        fileType: type,
        fileFormat: mimetype,
        fileSize: size
    })
    .then(a => {
        console.log(a)
        res.status(200).json(a)
    })
    .catch(err => {
        res.status(400).json({message: 'Something went wrong!'})
    })
}


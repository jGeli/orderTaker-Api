const { upload } = require("../middlewares");
const controller = require("../coreControllers/file.controllers");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  //Post
  app.post("/api/fileupload/:type", [upload.single('file')], controller.uploadFile);

};




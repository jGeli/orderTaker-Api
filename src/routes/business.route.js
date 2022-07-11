// const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/business.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/admin/business",
    // [authJwt.verifyToken],
    controller.createRecord
  );

  app.put(
    "/admin/business/:id",
    // [authJwt.verifyToken],
    controller.updateRecordById
  );


  app.get(
    "/admin/business",
    // [authJwt.verifyToken],
    controller.getAllRecords
  );

  app.get(
    "/admin/business/:id",
    // [authJwt.verifyToken],
    controller.getRecordById
  );

  app.delete(
    "/admin/business/:id",
    // [authJwt.verifyToken],
    controller.deleteRecordById
  );
};
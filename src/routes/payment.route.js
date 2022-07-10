// const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/payment.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/payments",
    controller.createRecord
  );

  app.put(
    "/payments/:id",
    controller.updateRecordById
  );


  app.get(
    "/payments",
    controller.getAllRecords
  );

  app.get(
    "/payments/:id",
    controller.getRecordById
  );

  app.delete(
    "/payments/:id",
    controller.deleteRecordById
  );
};
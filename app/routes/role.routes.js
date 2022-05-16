const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/role.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/role",
    controller.handleCreate
  );


  app.get("/api/roles", controller.handleGetAll);

};
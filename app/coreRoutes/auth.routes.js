const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../coreControllers/auth.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
 
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );
  app.post("/api/auth/signin", controller.signin);
  app.get("/api/auth", [authJwt.verifyToken], controller.getAuthUser);
  app.get("/api/auth/logout", [authJwt.verifyToken], controller.logout);

  app.get("/api/auth/suspend/:id", [authJwt.verifyToken, isAdmin], controller.handleSuspendUser);


};
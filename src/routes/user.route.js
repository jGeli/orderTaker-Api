// const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/auth/signup",
    // [
    //   verifySignUp.checkDuplicateUsernameOrEmail,
    //   verifySignUp.checkRolesExisted
    // ],
    controller.signup
  );

  // app.post("/api/auth/signin", controller.signin);
  // app.post("/api/auth/signup", controller.signup);
  // app.post("/api/auth/mVerify", controller.verifyMobile);  


    //GET
  // app.post("/api/auth/verify", controller.verifyMobile);
  // app.get("/api/auth", [authJwt.verifyToken], controller.getAuthUser);

};
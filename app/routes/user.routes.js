const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  





                         // USER GET ALL

  app.get("/api/users",
  [authJwt.verifyToken],
  controller.handleGetAll);



                         // USER - GET BY ID
 
  app.get("/api/user/:id", controller.handleGetById);


                         // USER - CREATE

  app.post(
    "/api/user",
    [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkDuplicateUsernameOrEmail],
    controller.handleCreate
  );

                          //USER - UPDATE

  app.patch(
    "/api/user/:id",
    controller.handleUpdateById
  );
  
                          //USER - DELETE 



  app.delete("/api/user/:id", controller.handleDeleteById);


};
const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


//Create
  app.post(
    "/api/user",
    controller.handleCreate
  );

//Update
  app.patch(
    "/api/user/:id",
    controller.handleUpdateById
  );

 //Get All or By Id
  app.get("/api/users", controller.handleGetAll);
  app.get("/api/user/:id", controller.handleGetById);
  

  //Delete
  app.delete("/api/user/:id", controller.handleDeleteById);


};
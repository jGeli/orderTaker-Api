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





  //Get All 
  app.get("/api/roles", controller.handleGetAll);
  
  
  
  
  //Get by ID
  app.get("/api/role/:id", controller.handleGetById);


//Create
  app.post(
    "/api/roles",
    controller.handleCreate
  );

//Update
  app.patch(
    "/api/role/:id",
    controller.handleUpdateById
  );


  

  //Delete
  app.delete("/api/role/:id", controller.handleDeleteById);


};
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



                          // ROLE - GET ALL
  app.get("/api/roles", controller.handleGetAll);
  
  
  
  
                           // ROLE - GET BY ID
                
  app.get("/api/role/:id", controller.handleGetById);


                            //ROLE - CREATE
                
  app.post(
    "/api/roles",
    controller.handleCreate
  );

                              //ROLE - UPDATE
                             
  app.patch(
    "/api/role/:id",
    controller.handleUpdateById
  );


  

                                //ROLE - DELETE
                    
  app.delete("/api/role/:id", controller.handleDeleteById);


};
const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/customer.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });




                        // CUSTOMER - GET ALL


    app.get("/api/customers", controller.handleGetAll);


                    // CUSTOMER - GET BY ID
  

    app.get("/api/customer/:id", controller.handleGetById);


                            // CUSTOMER - CREATE



    
    app.post(
        "/api/customer",
        controller.handleCreate
    );


                         //CUSTOMER - UPDATE


    app.patch(
        "/api/customer/:id",
        controller.handleUpdateById
    );

                    
                               //CUSTOMER - DELETE 

  
    app.delete("/api/customer/:id", controller.handleDeleteById);


};
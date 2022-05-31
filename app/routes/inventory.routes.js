const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/inventory.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


 




                             //Inventory - Create
  
    app.post(
        "/api/inventory",
        controller.handleCreate
    );

                            //Inventory - Update
  
    app.patch(
        "/api/inventory/:id",
        controller.handleUpdateById
    );

                            //Inventory - Get All
   
    app.get("/api/inventories", controller.handleGetAll);

                            //Inventory - Get by ID

    app.get("/api/inventory/:id", controller.handleGetById);


                            //Inventory - Delete
   
    app.delete("/api/inventory/:id", controller.handleDeleteById);


};
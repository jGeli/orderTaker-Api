const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/order.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


   



                         //ORDERS - CREATE
  
    app.post(
        "/api/order",
        controller.handleCreate
    );

                        //Orders - Update
  
    app.patch(
        "/api/order/:id",
        controller.handleUpdateById
    );

                         //Orders - Get All
  
    app.get("/api/orders", controller.handleGetAll);


                        //Orders - Get by ID

    app.get("/api/order/:id", controller.handleGetById);


                        //Orders - Delete

    app.delete("/api/order/:id", controller.handleDeleteById);


};
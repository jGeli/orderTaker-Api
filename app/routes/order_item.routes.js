const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/order_item.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

  




                            //Order_Item - Create
 
    app.post(
        "/api/order_item",
        controller.handleCreate
    );

                             //Order_Item - Update
  
    app.patch(
        "/api/order_item/:id",
        controller.handleUpdateById
    );

                             //Order_Item - Get All
   
    app.get("/api/order_items", controller.handleGetAll);


                            //Order_Item - Get by ID

    app.get("/api/order_item/:id", controller.handleGetById);


                            //Order_Item - Delete
 
    app.delete("/api/order_item/:id", controller.handleDeleteById);


};
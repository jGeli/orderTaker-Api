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


    //Create
    app.post(
        "/api/order_item",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/order_item/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/order_items", controller.handleGetAll);
    app.get("/api/order_item/:id", controller.handleGetById);


    //Delete
    app.delete("/api/order_item/:id", controller.handleDeleteById);


};
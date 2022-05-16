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


    //Create
    app.post(
        "/api/order",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/order/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/orders", controller.handleGetAll);
    app.get("/api/order/:id", controller.handleGetById);


    //Delete
    app.delete("/api/order/:id", controller.handleDeleteById);


};
const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/product.controller");
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
        "/api/product",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/product/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/products", controller.handleGetAll);
    app.get("/api/product/:id", controller.handleGetById);


    //Delete
    app.delete("/api/product/:id", controller.handleDeleteById);


};
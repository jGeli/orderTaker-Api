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


    //Create
    app.post(
        "/api/customer",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/customer/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/customers", controller.handleGetAll);
    app.get("/api/customer/:id", controller.handleGetById);


    //Delete
    app.delete("/api/customer/:id", controller.handleDeleteById);


};
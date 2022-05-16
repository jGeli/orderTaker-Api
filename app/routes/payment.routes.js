const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/payment.controller");
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
        "/api/payment",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/payment/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/payments", controller.handleGetAll);
    app.get("/api/payment/:id", controller.handleGetById);


    //Delete
    app.delete("/api/payment/:id", controller.handleDeleteById);


};
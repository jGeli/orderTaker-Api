const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/notification.controller");
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
        "/api/notification",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/notification/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/notifications", controller.handleGetAll);
    app.get("/api/notification/:id", controller.handleGetById);


    //Delete
    app.delete("/api/notification/:id", controller.handleDeleteById);


};
const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/purchased.controller");
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
        "/api/purchased",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/purchased/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/purchases", controller.handleGetAll);
    app.get("/api/purchased/:id", controller.handleGetById);


    //Delete
    app.delete("/api/purchased/:id", controller.handleDeleteById);


};
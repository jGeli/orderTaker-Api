const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/purchase.controller");
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
        "/api/purchase",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/purchase/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/purchases", controller.handleGetAll);
    app.get("/api/purchase/:id", controller.handleGetById);


    //Delete
    app.delete("/api/purchase/:id", controller.handleDeleteById);


};
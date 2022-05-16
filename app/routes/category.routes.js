const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/category.controller");
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
        "/api/category",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/category/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/categories", controller.handleGetAll);
    app.get("/api/category/:id", controller.handleGetById);


    //Delete
    app.delete("/api/category/:id", controller.handleDeleteById);


};
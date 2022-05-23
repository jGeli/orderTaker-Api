const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/business.controller");
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
        "/api/business",
        controller.handleCreate
    );

    //Update
    app.patch(
        "/api/business/:id",
        controller.handleUpdateById
    );

    //Get All or By Id
    app.get("/api/businesses", controller.handleGetAll);
    app.get("/api/business/:id", controller.handleGetById);


    //Delete
    app.delete("/api/business/:id", controller.handleDeleteById);


};
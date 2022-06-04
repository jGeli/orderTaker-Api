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

 


                            //Category - Create

    app.post(
        "/api/category",
        controller.handleCreate
    );

                            //Category - Update
  
    app.patch(
        "/api/category/:id",
        controller.handleUpdateById
    );

                            //Category - Get All

    app.get("/api/categories", controller.handleGetAll);

                            //Category - Get by ID

    app.get("/api/category/:id", controller.handleGetById);


                            //Category - Delete

    app.delete("/api/category/:id", controller.handleDeleteById);


};
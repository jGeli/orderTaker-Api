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




                        //Products - Create
                  
    app.post(
        "/api/product",
        controller.handleCreate
    );

                         //Products - Update
                       

    app.patch(
        "/api/product/:id",
        controller.handleUpdateById
    );

                        //Products - Get All

    app.get("/api/products", controller.handleGetAll);


                        // Products - Get By ID

    app.get("/api/product/:id", controller.handleGetById);


                        //Products - Delete

    app.delete("/api/product/:id", controller.handleDeleteById);


};
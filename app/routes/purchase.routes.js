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


 


                        //PURCHASES - CREATE

    app.post(
        "/api/purchases",
        controller.handleCreate
    );

                        //PURCHASES - UPDATE
 
    app.patch(
        "/api/purchase/:id",
        controller.handleUpdateById
    );

                    //PURCHASES - GET ALL
              
    app.get("/api/purchases", controller.handleGetAll);


                     //PURCHASES - GET BY ID

    app.get("/api/purchase/:id", controller.handleGetById);

                     //PURCHASES - DELETE
 
    app.delete("/api/purchase/:id", controller.handleDeleteById);


};
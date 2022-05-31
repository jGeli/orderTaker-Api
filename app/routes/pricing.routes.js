const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/pricing.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });






                         // PRICING - GET ALL


    app.get("/api/pricings", controller.handleGetAll);


                         // PRICING - GET BY ID


    app.get("/api/pricing/:id", controller.handleGetById);


                         // PRICING - CREATE


    app.post(
        "/api/pricing",
        controller.handleCreate
    );


                          // PRICING - UPDATE



    app.patch(
        "/api/pricing/:id",
        controller.handleUpdateById
    );


                          // PRICING - DELETE


    app.delete("/api/pricing/:id", controller.handleDeleteById);


};
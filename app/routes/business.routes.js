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

      //Business - Create
  
    app.post(
        "/api/business",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.handleCreate
    );

                            //Business - Update
  
    app.patch(
        "/api/business/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.handleUpdateById
    );

                            //Business - Get All
   
    app.get("/api/business", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.handleGetAll);

                            //Business - Get by ID

    app.get("/api/business/:id", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.handleGetById);


                             //Business - Delete
 
    app.delete("/api/business/:id", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.handleDeleteById);


};
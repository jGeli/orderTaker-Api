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





                            //Notifications - Create
 
    app.post(
        "/api/notification",
        controller.handleCreate
    );

                            //Notifications - Update
   
    app.patch(
        "/api/notification/:id",
        controller.handleUpdateById
    );

                            //Notifications - Get All
    
    app.get("/api/notifications", controller.handleGetAll);

                            //Notifications -  Get by ID

    app.get("/api/notification/:id", controller.handleGetById);


                            //Notifications - Delete

    app.delete("/api/notification/:id", controller.handleDeleteById);


};
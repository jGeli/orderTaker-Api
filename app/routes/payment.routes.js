const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/payment.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

  

                        //Payments - Create
   
    app.post(
        "/api/payment",
        controller.handleCreate
    );

                        //Payments - Update
  

    app.patch(
        "/api/payment/:id",
        controller.handleUpdateById
    );

                         //Payments - Get All
 
    app.get("/api/payments", controller.handleGetAll);



                         //Payments - Get by ID

    app.get("/api/payment/:id", controller.handleGetById);


                        //Payments - Delete

    app.delete("/api/payment/:id", controller.handleDeleteById);


};
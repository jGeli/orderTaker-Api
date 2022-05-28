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

    /**
   * @swagger
   * components:
   *      schemas:
     *           Payments:
     *              type: object
     *              properties:
     *                    order_id:
     *                        type: string
     *                    customer_id:
     *                        type: string
     *                    business_id:
     *                        type: string
     *                    description: 
     *                        type: string
     *                    amount:
     *                        type: string
     *                    type:
     *                        type: string
     *                    receivedBy: 
     *                        type: string
     *                    notes: 
     *                        type: string
   */


                        //Payments - Create
    /**
      * @swagger
      * /api/payment:
      *  post:
      *      summary: PAYMENTS - CREATE
      *      description: this api is used to create Payments
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Payments'
      *      responses: 
      *          200:
      *              description: used to create Payments
      */
    app.post(
        "/api/payment",
        controller.handleCreate
    );

                        //Payments - Update
    /**
    * @swagger
    * /api/payment/{id}:
    *  patch:
    *      summary: PAYMENTS - UPDATE
    *      description: this api is used to update Payments data
    *      parameters:
    *          - in: path
    *            name: id
    *            required: true
    *            description: Payments ID required
    *            schema:
    *              type: string
    *      requestBody:
    *          required: true
    *          content:
    *              application/json:
    *                  schema:
    *                      $ref: '#components/schemas/Payments'
    *      responses: 
    *          200:
    *              description: used to update Payments
    *              content: 
    *                  apllication/json:
    *                      schema:
    *                           type: array
    *                           items: 
    *                              $ref: '#components/schemas/Payments'
    */

    app.patch(
        "/api/payment/:id",
        controller.handleUpdateById
    );

                         //Payments - Get All
    /**
       * @swagger
       * /api/payments:
       *  get:
       *      summary: PAYMENTS- GET ALL
       *      description: this api is used to fetch all Payments from mongodb
       *      responses: 
       *          200:
       *              description: to get all Payments data
       *              content: 
       *                  apllication/json:
       *                      schema:
       *                           type: array
       *                           items: 
       *                              $ref: '#components/schemas/Payments'
       */
    app.get("/api/payments", controller.handleGetAll);



                         //Payments - Get by ID
    /**
* @swagger
* /api/payment/{id}:
*  get:
*      summary: PAYMENTS - GET BY ID
*      description: this api is used to fetch Payments ID
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Payments ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get Payments
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Payments'
*/
    app.get("/api/payment/:id", controller.handleGetById);


                        //Payments - Delete
    /**
     * @swagger
     * /api/payment/{id}:
     *  delete:
     *      summary: PAYMENTS - DELETE BY ID
     *      description: this api is used to delete Payments by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: Payments ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete Payments
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Payments'
     */
    app.delete("/api/payment/:id", controller.handleDeleteById);


};
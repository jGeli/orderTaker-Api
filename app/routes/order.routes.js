const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/order.controller");
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
      *           Orders:
      *              type: object
      *              properties:
      *                    description:
      *                        type: string
      *                    order_no:
      *                        type: string
      *                    order_items:
      *                        type: string
      *                    total_amount: 
      *                        type: string
      *                    customer_id:
      *                        type: string
      *                    recordedBy:
      *                        type: string
      *                    notes: 
      *                        type: string
    */




                         //ORDERS - CREATE
    /**
        * @swagger
        * /api/order:
        *  post:
        *      summary: ORDERS - CREATE
        *      description: this api is used to create orders
        *      requestBody:
        *          required: true
        *          content:
        *              application/json:
        *                  schema:
        *                      $ref: '#components/schemas/Orders'
        *      responses: 
        *          200:
        *              description: used to create Orders
        */
    app.post(
        "/api/order",
        controller.handleCreate
    );

                        //Orders - Update
    /**
      * @swagger
      * /api/order/{id}:
      *  patch:
      *      summary: ORDERS - UPDATE
      *      description: this api is used to update Orders data
      *      parameters:
      *          - in: path
      *            name: id
      *            required: true
      *            description: Orders ID required
      *            schema:
      *              type: string
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Orders'
      *      responses: 
      *          200:
      *              description: used to update Orders
      *              content: 
      *                  apllication/json:
      *                      schema:
      *                           type: array
      *                           items: 
      *                              $ref: '#components/schemas/Orders'
      */
    app.patch(
        "/api/order/:id",
        controller.handleUpdateById
    );

                         //Orders - Get All
    /**
       * @swagger
       * /api/orders:
       *  get:
       *      summary: ORDERS- GET ALL
       *      description: this api is used to fetch all Orders from mongodb
       *      responses: 
       *          200:
       *              description: to get all Orders data
       *              content: 
       *                  apllication/json:
       *                      schema:
       *                           type: array
       *                           items: 
       *                              $ref: '#components/schemas/Orders'
       */
    app.get("/api/orders", controller.handleGetAll);


                        //Orders - Get by ID
    /**
* @swagger
* /api/order/{id}:
*  get:
*      summary: ORDERS - GET BY ID
*      description: this api is used to fetch Orders
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Orders ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get Orders
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Orders'
*/
    app.get("/api/order/:id", controller.handleGetById);


                        //Orders - Delete
    /**
     * @swagger
     * /api/order/{id}:
     *  delete:
     *      summary: ORDERS - DELETE BY ID
     *      description: this api is used to delete Orders by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: Orders ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete Orders
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Orders'
     */
    app.delete("/api/order/:id", controller.handleDeleteById);


};
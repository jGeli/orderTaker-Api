const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/order_item.controller");
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
      *           Order_items:
      *              type: object
      *              properties:
      *                    inventory_id: {
      *                        type: mongoose.Schema.Types.ObjectId,
      *                             ref: 'inventories' }
      *                    qty:
      *                        type: string
      *                    price:
      *                        type: string
      *                    subtotal: 
      *                        type: string
      *                    notes:
      *                        type: string
    */





                            //Order_Item - Create
    /**
         * @swagger
         * /api/order_item:
         *  post:
         *      summary: ORDER_ITEMS - CREATE
         *      description: this api is used to create Order_items
         *      requestBody:
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: '#components/schemas/Order_items'
         *      responses: 
         *          200:
         *              description: used to create Orders
         */
    app.post(
        "/api/order_item",
        controller.handleCreate
    );

                             //Order_Item - Update
    /**
      * @swagger
      * /api/order_item/{id}:
      *  patch:
      *      summary: ORDER_ITEMS - UPDATE
      *      description: this api is used to update Order_items data
      *      parameters:
      *          - in: path
      *            name: id
      *            required: true
      *            description: Order_items ID required
      *            schema:
      *              type: string
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Order_items'
      *      responses: 
      *          200:
      *              description: used to update Order_items
      *              content: 
      *                  apllication/json:
      *                      schema:
      *                           type: array
      *                           items: 
      *                              $ref: '#components/schemas/Order_items'
      */
    app.patch(
        "/api/order_item/:id",
        controller.handleUpdateById
    );

                             //Order_Item - Get All
    /**
       * @swagger
       * /api/order_items:
       *  get:
       *      summary: ORDER_ITEMS - GET ALL
       *      description: this api is used to fetch all Order_items from mongodb
       *      responses: 
       *          200:
       *              description: to get all Order_items data
       *              content: 
       *                  apllication/json:
       *                      schema:
       *                           type: array
       *                           items: 
       *                              $ref: '#components/schemas/Order_items'
       */
    app.get("/api/order_items", controller.handleGetAll);


                            //Order_Item - Get by ID
    /**
* @swagger
* /api/order_item/{id}:
*  get:
*      summary: ORDER_ITEMS - GET BY ID
*      description: this api is used to fetch Order_items
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Order_items ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get Order_items
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Order_items'
*/
    app.get("/api/order_item/:id", controller.handleGetById);


                            //Order_Item - Delete
    /**
     * @swagger
     * /api/order_item/{id}:
     *  delete:
     *      summary: ORDER_ITEMS - DELETE BY ID
     *      description: this api is used to delete Order_items by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: Order_items ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete Order_items
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Order_items'
     */
    app.delete("/api/order_item/:id", controller.handleDeleteById);


};
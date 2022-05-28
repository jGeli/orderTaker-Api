const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/inventory.controller");
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
         *           Inventories:
         *              type: object
         *              properties:
         *                    product_id:
         *                        type: string
         *                    purchases_id:
         *                        type: string
         *                    description:
         *                        type: string
         *                    inStocks: 
         *                        type: string
         *                    price:
         *                        type: string
         *                    notes:
         *                        type: string
       */





                             //Inventory - Create
    /**
         * @swagger
         * /api/inventory:
         *  post:
         *      summary: INVENTORIES - CREATE
         *      description: this api is used to create inventory
         *      requestBody:
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: '#components/schemas/Inventories'
         *      responses: 
         *          200:
         *              description: used to create inventory
         */
    app.post(
        "/api/inventory",
        controller.handleCreate
    );

                            //Inventory - Update
    /**
      * @swagger
      * /api/inventory/{id}:
      *  patch:
      *      summary: INVENTORIES - UPDATE
      *      description: this api is used to update inventory data
      *      parameters:
      *          - in: path
      *            name: id
      *            required: true
      *            description: inventory ID required
      *            schema:
      *              type: string
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Inventories'
      *      responses: 
      *          200:
      *              description: used to update inventory
      *              content: 
      *                  apllication/json:
      *                      schema:
      *                           type: array
      *                           items: 
      *                              $ref: '#components/schemas/Inventories'
      */
    app.patch(
        "/api/inventory/:id",
        controller.handleUpdateById
    );

                            //Inventory - Get All
    /**
       * @swagger
       * /api/inventories:
       *  get:
       *      summary: INVENTORIES - GET ALL
       *      description: this api is used to fetch all inventory from mongodb
       *      responses: 
       *          200:
       *              description: to get all inventory data
       *              content: 
       *                  apllication/json:
       *                      schema:
       *                           type: array
       *                           items: 
       *                              $ref: '#components/schemas/Inventories'
       */
    app.get("/api/inventories", controller.handleGetAll);

                            //Inventory - Get by ID
    /**
* @swagger
* /api/inventory/{id}:
*  get:
*      summary: INVENTORIES - GET BY ID
*      description: this api is used to fetch inventory
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: inventory ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get inventory
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Inventories'
*/
    app.get("/api/inventory/:id", controller.handleGetById);


                            //Inventory - Delete
    /**
     * @swagger
     * /api/inventory/{id}:
     *  delete:
     *      summary: INVENTORIES - DELETE BY ID
     *      description: this api is used to delete inventory by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: inventory ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete inventory
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Inventories'
     */
    app.delete("/api/inventory/:id", controller.handleDeleteById);


};
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


    /**
     * @swagger
     * components:
     *      schemas:
       *           Business:
       *              type: object
       *              properties:
       *                    name:
       *                        type: string
       *                    address:
       *                        type: string
       *                    contact:
       *                         type: string
       *                    email_address:
       *                         type: string
       *                    type:
       *                         type: string
       *                    notes:
       *                         type: string
       *                    inventory_id:
       *                         type: string   
       *                    orders_id:
       *                         type: string
       *                    purchases_id:
       *                         type: string
       *                    payments_id:
       *                         type: string   
       *                    customers_id:
       *                         type: string
     */



                            //Business - Create
    /**
         * @swagger
         * /api/business:
         *  post:
         *      summary: BUSINESS - CREATE
         *      description: this api is used to create Businesses
         *      requestBody:
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: '#components/schemas/Business'
         *      responses: 
         *          200:
         *              description: used to create Business
         */
    app.post(
        "/api/business",
        controller.handleCreate
    );

                            //Business - Update
    /**
      * @swagger
      * /api/business/{id}:
      *  patch:
      *      summary: BUSINESS - UPDATE
      *      description: this api is used to update Business data
      *      parameters:
      *          - in: path
      *            name: id
      *            required: true
      *            description: Business ID required
      *            schema:
      *              type: string
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Business'
      *      responses: 
      *          200:
      *              description: used to update Business
      *              content: 
      *                  apllication/json:
      *                      schema:
      *                           type: array
      *                           items: 
      *                              $ref: '#components/schemas/Business'
      */
    app.patch(
        "/api/business/:id",
        controller.handleUpdateById
    );

                            //Business - Get All
    /**
       * @swagger
       * /api/businesses:
       *  get:
       *      summary: BUSINESS - GET ALL
       *      description: this api is used to fetch all Business from mongodb
       *      responses: 
       *          200:
       *              description: to get all Business data
       *              content: 
       *                  apllication/json:
       *                      schema:
       *                           type: array
       *                           items: 
       *                              $ref: '#components/schemas/Business'
       */
    app.get("/api/businesses", controller.handleGetAll);

                            //Business - Get by ID
    /**
* @swagger
* /api/business/{id}:
*  get:
*      summary: BUSINESS - GET BY ID
*      description: this api is used to fetch Business
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Business ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get Business
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Business'
*/
    app.get("/api/business/:id", controller.handleGetById);


                             //Business - Delete
    /**
     * @swagger
     * /api/business/{id}:
     *  delete:
     *      summary: BUSINESS - DELETE BY ID
     *      description: this api is used to delete Business by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: Business ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete Business
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Business'
     */
    app.delete("/api/business/:id", controller.handleDeleteById);


};
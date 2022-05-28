const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/product.controller");
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
     *           Products:
     *              type: object
     *              properties:
     *                    name:
     *                        type: string
     *                    description:
     *                        type: string
     *                    type:
     *                        type: string
     *                    category: {
     *                        type: mongoose.Schema.Types.ObjectId,
     *                             ref: 'categories'}
     *                    notes:
     *                        type: string
   */



                        //Products - Create
    /**
    * @swagger
    * /api/product:
    *  post:
    *      summary: PRODUCTS - CREATE
    *      description: this api is used to create products
    *      requestBody:
    *          required: true
    *          content:
    *              application/json:
    *                  schema:
    *                      $ref: '#components/schemas/Products'
    *      responses: 
    *          200:
    *              description: used to create products
    */                        
    app.post(
        "/api/product",
        controller.handleCreate
    );

                         //Products - Update
    /**
    * @swagger
    * /api/product/{id}:
    *  patch:
    *      summary: PRODUCTS - UPDATE
    *      description: this api is used to update Products data
    *      parameters:
    *          - in: path
    *            name: id
    *            required: true
    *            description: Products ID required
    *            schema:
    *              type: string
    *      requestBody:
    *          required: true
    *          content:
    *              application/json:
    *                  schema:
    *                      $ref: '#components/schemas/Products'
    *      responses: 
    *          200:
    *              description: used to update Products
    *              content: 
    *                  apllication/json:
    *                      schema:
    *                           type: array
    *                           items: 
    *                              $ref: '#components/schemas/Products'
    */                         

    app.patch(
        "/api/product/:id",
        controller.handleUpdateById
    );

                        //Products - Get All
    /**
     * @swagger
     * /api/products:
     *  get:
     *      summary: PRODUCTS- GET ALL
     *      description: this api is used to fetch all Products from mongodb
     *      responses: 
     *          200:
     *              description: to get all Products data
     *              content: 
     *                  apllication/json:
     *                      schema:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Products'
     */
    app.get("/api/products", controller.handleGetAll);


                        // Products - Get By ID
    /**
* @swagger
* /api/product/{id}:
*  get:
*      summary: PRODUCTS - GET BY ID
*      description: this api is used to fetch Products ID
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Products ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get Products
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Products'
*/
    app.get("/api/product/:id", controller.handleGetById);


                        //Products - Delete
    /**
   * @swagger
   * /api/product/{id}:
   *  delete:
   *      summary: PRODUCTS - DELETE BY ID
   *      description: this api is used to delete Products by ID
   *      parameters:
   *          - in: path
   *            name: id
   *            required: true
   *            description: Products ID required
   *            schema:
   *              type: string
   *      responses: 
   *          200:
   *              description: to delete Products
   *              content: 
   *                  apllication/json:
   *                      schemas:
   *                           type: array
   *                           items: 
   *                              $ref: '#components/schemas/Products'
   */
    app.delete("/api/product/:id", controller.handleDeleteById);


};
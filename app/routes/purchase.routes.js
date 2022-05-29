const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/purchase.controller");
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
         *           Purchases:
         *              type: object
         *              properties:
         *                    products: [{
         *                        type: mongoose.Schema.Types.ObjectId,
         *                           ref: 'products' }]
         *                    qty:
         *                        type: string
         *                    price:
         *                        type: string
         *                    total: 
         *                        type: string
         *                    type:
         *                        type: string
         *                    purchaseBy:
         *                        type: string
         *                    notes:
         *                        type: string  
       */


                        //PURCHASES - CREATE
    /**
   * @swagger
   * /api/purchases:
   *  post:
   *      summary: PURCHASES - CREATE
   *      description: this api is used to create purchases
   *      requestBody:
   *          required: true
   *          content:
   *              application/json:
   *                  schema:
   *                      $ref: '#components/schemas/Purchases'
   *      responses: 
   *          200:
   *              description: used to create purchases
   */
    app.post(
        "/api/purchases",
        controller.handleCreate
    );

                        //PURCHASES - UPDATE
    /**
 * @swagger
 * /api/purchase/{id}:
 *  patch:
 *      summary: PURCHASES - UPDATE
 *      description: this api is used to update PURCHASES data
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: PURCHASES ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Purchases'
 *      responses: 
 *          200:
 *              description: used to update Purchases
 *              content: 
 *                  apllication/json:
 *                      schema:
 *                           type: array
 *                           items: 
 *                              $ref: '#components/schemas/Purchases'
 */
    app.patch(
        "/api/purchase/:id",
        controller.handleUpdateById
    );

                    //PURCHASES - GET ALL
    /**
  * @swagger
  * /api/purchases:
  *  get:
  *      summary: PURCHASES - GET ALL
  *      description: this api is used to fetch all purchases from mongodb
  *      responses: 
  *          200:
  *              description: to get all purchases data
  *              content: 
  *                  apllication/json:
  *                      schema:
  *                           type: array
  *                           items: 
  *                              $ref: '#components/schemas/Purchases'
  */                
    app.get("/api/purchases", controller.handleGetAll);


                     //PURCHASES - GET BY ID
    /**
* @swagger
* /api/purchase/{id}:
*  get:
*      summary: PURCHASES - GET BY ID
*      description: this api is used to fetch purchasesby ID
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: purchases ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get purchases
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Purchases'
*/
    app.get("/api/purchase/:id", controller.handleGetById);

                     //PURCHASES - DELETE
    /**
   * @swagger
   * /api/purchase/{id}:
   *  delete:
   *      summary: PURCHASES - DELETE BY ID
   *      description: this api is used to delete purchase by ID
   *      parameters:
   *          - in: path
   *            name: id
   *            required: true
   *            description: purchase ID required
   *            schema:
   *              type: string
   *      responses: 
   *          200:
   *              description: to delete purchases
   *              content: 
   *                  apllication/json:
   *                      schemas:
   *                           type: array
   *                           items: 
   *                              $ref: '#components/schemas/Purchases'
   */
    app.delete("/api/purchase/:id", controller.handleDeleteById);


};
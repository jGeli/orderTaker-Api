const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/pricing.controller");
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
     *           Pricing:
     *              type: object
     *              properties:
     *                    name:
     *                        type: string
     *                    description:
     *                        type: string
     *                    price: 
     *                        type: string
     *                    notes:
     *                        type: string
   */






                        // PRICING - GET ALL
    /**
     * @swagger
     * /api/pricings:
     *  get:
     *      summary: PRICING - GET ALL
     *      description: this api is used to fetch all Pricing from mongodb
     *      responses: 
     *          200:
     *              description: to get all Pricing data
     *              content: 
     *                  apllication/json:
     *                      schema:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Pricing'
     */

    app.get("/api/pricings", controller.handleGetAll);


                      // PRICING - GET BY ID

    /**
* @swagger
* /api/pricing/{id}:
*  get:
*      summary: PRICING - GET BY ID
*      description: this api is used to fetch Pricing ID
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Pricings ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to getPricing
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Pricing'
*/
    app.get("/api/pricing/:id", controller.handleGetById);


                         // PRICING - CREATE

    /**
      * @swagger
      * /api/pricing:
      *  post:
      *      summary: PRICING - CREATE
      *      description: this api is used to create Pricing
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Pricing'
      *      responses: 
      *          200:
      *              description: used to create Pricing
      */
    app.post(
        "/api/pricing",
        controller.handleCreate
    );


                          // PRICING - UPDATE

    /**
     * @swagger
     * /api/pricing/{id}:
     *  patch:
     *      summary: PRICING - UPDATE
     *      description: this api is used to update Pricing data
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: Pricing ID required
     *            schema:
     *              type: string
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      $ref: '#components/schemas/Pricing'
     *      responses: 
     *          200:
     *              description: used to update Pricing
     *              content: 
     *                  apllication/json:
     *                      schema:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Pricing'
     */

    app.patch(
        "/api/pricing/:id",
        controller.handleUpdateById
    );


                              // PRICING - DELETE

    /**
   * @swagger
   * /api/pricing/{id}:
   *  delete:
   *      summary: PRICING - DELETE BY ID
   *      description: this api is used to delete Pricing by ID
   *      parameters:
   *          - in: path
   *            name: id
   *            required: true
   *            description: Pricing ID required
   *            schema:
   *              type: string
   *      responses: 
   *          200:
   *              description: to delete Pricing
   *              content: 
   *                  apllication/json:
   *                      schemas:
   *                           type: array
   *                           items: 
   *                              $ref: '#components/schemas/Pricing'
   */
    app.delete("/api/pricing/:id", controller.handleDeleteById);


};
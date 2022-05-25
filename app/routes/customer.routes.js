const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/customer.controller");
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
       *           Customer:
       *              type: object
       *              properties:
       *                    firstName:
       *                        type: string
       *                    lastName:
       *                        type: string
       *                    birthDate:
       *                         type: string
       *                    age:
       *                         type: string
       *                    gender:
       *                         type: string
       *                    address:
       *                         type: string
       *                    contact:
       *                         type: string   
       *                    notes:
       *                         type: string
     */

                        // CUSTOMER - GET ALL


    /**
     * @swagger
     * /api/customers:
     *  get:
     *      summary: CUSTOMER - GET ALL
     *      description: this api is used to fetch all customers from mongodb
     *      responses: 
     *          200:
     *              description: to get all customers data
     *              content: 
     *                  apllication/json:
     *                      schema:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Customer'
     */

    app.get("/api/customers", controller.handleGetAll);


                    // CUSTOMER - GET BY ID
    /**
    * @swagger
    * /api/customer/{id}:
    *  get:
    *      summary: CUSTOMER - GET BY ID
    *      description: this api is used to fetch customer by ID
    *      parameters:
    *          - in: path
    *            name: id
    *            required: true
    *            description: customer ID required
    *            schema:
    *              type: string
    *      responses: 
    *          200:
    *              description: to get customer
    *              content: 
    *                  apllication/json:
    *                      schemas:
    *                           type: array
    *                           items: 
    *                              $ref: '#components/schemas/Customer'
    */

    app.get("/api/customer/:id", controller.handleGetById);


                            // CUSTOMER - CREATE


    /**
   * @swagger
   * /api/customer:
   *  post:
   *      summary: CUSTOMER - CREATE
   *      description: this api is used to create customers
   *      requestBody:
   *          required: true
   *          content:
   *              application/json:
   *                  schema:
   *                      $ref: '#components/schemas/Customer'
   *      responses: 
   *          200:
   *              description: used to create customers
   */

    //Create
    app.post(
        "/api/customer",
        controller.handleCreate
    );


                         //CUSTOMER - UPDATE
    /**
  * @swagger
  * /api/customer/{id}:
  *  patch:
  *      summary: CUSTOMER - UPDATE
  *      description: this api is used to update user data
  *      parameters:
  *          - in: path
  *            name: id
  *            required: true
  *            description: customer ID required
  *            schema:
  *              type: string
  *      requestBody:
  *          required: true
  *          content:
  *              application/json:
  *                  schema:
  *                      $ref: '#components/schemas/Customer'
  *      responses: 
  *          200:
  *              description: used to create users
  *              content: 
  *                  apllication/json:
  *                      schema:
  *                           type: array
  *                           items: 
  *                              $ref: '#components/schemas/Customer'
  */


    app.patch(
        "/api/customer/:id",
        controller.handleUpdateById
    );

                    
                               //CUSTOMER - DELETE 

    /**
     * @swagger
     * /api/customer/{id}:
     *  delete:
     *      summary: CUSTOMER - DELETE BY ID
     *      description: this api is used to delete customer by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: customer ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete customer
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Customer'
     */
    app.delete("/api/customer/:id", controller.handleDeleteById);


};
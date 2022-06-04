require('dotenv').config()
    /**
   * @swagger
   * components:
   *      schemas:
     *           Payments:
     *              type: object
     *              properties:
     *                    orders: [{
     *                        type: mongoose.Schema.Types.ObjectId,
     *                             ref: "orders" }]
     *                    customers: [{
     *                        type: mongoose.Schema.Types.ObjectId,
     *                             ref: "customers" }]
     *                    businesses: [{
     *                        type: mongoose.Schema.Types.ObjectId,
     *                             ref: "businesses" }]
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
   



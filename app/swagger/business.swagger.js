require('dotenv').config()


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
       *                    inventories: [{
       *                         type: mongoose.Schema.Types.ObjectId,
       *                              ref: 'inventories'}]   
       *                    orders: [{
       *                         type: mongoose.Schema.Types.ObjectId,
       *                              ref: 'orders'}]   
       *                    purchases: [{
       *                         type: mongoose.Schema.Types.ObjectId,
       *                              ref: 'purchases'}]   
       *                    payments: [{
       *                         type: mongoose.Schema.Types.ObjectId,
       *                              ref: 'payments'}]   
       *                    customers: [{
       *                         type: mongoose.Schema.Types.ObjectId,
       *                              ref: 'customers'}]   
       *                    users: [{
       *                         type: mongoose.Schema.Types.ObjectId,
       *                              ref: 'users'}] 
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
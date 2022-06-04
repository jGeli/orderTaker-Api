require('dotenv').config()

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
      *                    order_items: [{
      *                        type: mongoose.Schema.Types.ObjectId,
      *                             ref: "order_items" }]
      *                    total_amount: 
      *                        type: string
      *                    customer_id: [{
      *                        type: mongoose.Schema.Types.ObjectId,
      *                             ref: "order_items" }]
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
        *      tags: ['Orders'] 
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


    //Orders - Update
    /**
      * @swagger
      * /api/order/{id}:
      *  patch:
      *      summary: ORDERS - UPDATE
      *      tags: ['Orders'] 
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


    //Orders - Get All
    /**
       * @swagger
       * /api/orders:
       *  get:
       *      summary: ORDERS- GET ALL
       *      tags: ['Orders']
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



    //Orders - Get by ID
    /**
* @swagger
* /api/order/{id}:
*  get:
*      summary: ORDERS - GET BY ID
*      tags: ['Orders'] 
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



    //Orders - Delete
    /**
     * @swagger
     * /api/order/{id}:
     *  delete:
     *      summary: ORDERS - DELETE BY ID
     *      tags: ['Orders']
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
    



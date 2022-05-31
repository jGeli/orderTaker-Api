require('dotenv').config()

    /**
       * @swagger
       * components:
       *      schemas:
         *           Inventories:
         *              type: object
         *              properties:
         *                    products: [{
         *                        type: mongoose.Schema.Types.ObjectId,
         *                             ref: 'products'}]
         *                    purchases: [{
         *                        type: mongoose.Schema.Types.ObjectId,
         *                             ref: 'purchases'}]
         *                    pricings: [{
         *                        type: mongoose.Schema.Types.ObjectId,
         *                             ref: 'pricings'}]
         *                    description:
         *                        type: string
         *                    inStocks: 
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
   



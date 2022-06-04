require('dotenv').config()
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
     *                    categories: {
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
    *      tags: ['Products'] 
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


    //Products - Update
    /**
    * @swagger
    * /api/product/{id}:
    *  patch:
    *      summary: PRODUCTS - UPDATE
    *      tags: ['Products'] 
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



    //Products - Get All
    /**
     * @swagger
     * /api/products:
     *  get:
     *      summary: PRODUCTS- GET ALL
     *      tags: ['Products']
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



    // Products - Get By ID
    /**
* @swagger
* /api/product/{id}:
*  get:
*      summary: PRODUCTS - GET BY ID
*      tags: ['Products'] 
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



    //Products - Delete
    /**
   * @swagger
   * /api/product/{id}:
   *  delete:
   *      summary: PRODUCTS - DELETE BY ID
   *      tags: ['Products']
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
    



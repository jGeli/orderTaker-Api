require('dotenv').config()

    /**
   * @swagger
   * components:
   *      schemas:
     *           Categories:
     *              type: object
     *              properties:
     *                    name:
     *                        type: string
     *                    description:
     *                        type: string
     *                    notes:
     *                        type: string
   */



    //Category - Create
    /**
         * @swagger
         * /api/category:
         *  post:
         *      summary: CATEGORIES - CREATE
         *      description: this api is used to create Categories
         *      requestBody:
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: '#components/schemas/Categories'
         *      responses: 
         *          200:
         *              description: used to create Categories
         */
   
    //Category - Update
    /**
      * @swagger
      * /api/category/{id}:
      *  patch:
      *      summary: CATEGORIES - UPDATE
      *      description: this api is used to update Categories data
      *      parameters:
      *          - in: path
      *            name: id
      *            required: true
      *            description: Categories ID required
      *            schema:
      *              type: string
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Categories'
      *      responses: 
      *          200:
      *              description: used to update Categories
      *              content: 
      *                  apllication/json:
      *                      schema:
      *                           type: array
      *                           items: 
      *                              $ref: '#components/schemas/Categories'
      */
  
    //Category - Get All
    /**
       * @swagger
       * /api/categories:
       *  get:
       *      summary: CATEGORIES - GET ALL
       *      description: this api is used to fetch all Categories from mongodb
       *      responses: 
       *          200:
       *              description: to get all Categories data
       *              content: 
       *                  apllication/json:
       *                      schema:
       *                           type: array
       *                           items: 
       *                              $ref: '#components/schemas/Categories'
       */
   

    //Category - Get by ID
    /**
* @swagger
* /api/category/{id}:
*  get:
*      summary: CATEGORIES - GET BY ID
*      description: this api is used to fetch Categories
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Categories ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get Categories
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Categories'
*/
   


    //Category - Delete
    /**
     * @swagger
     * /api/category/{id}:
     *  delete:
     *      summary: CATEGORIES - DELETE BY ID
     *      description: this api is used to delete Categories by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: Categories ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete Categories
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Categories'
     */
    


require('dotenv').config()


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
     *      tags: ['Customers'] 
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




    // CUSTOMER - GET BY ID
    /**
    * @swagger
    * /api/customer/{id}:
    *  get:
    *      summary: CUSTOMER - GET BY ID
    *      tags: ['Customers']
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




    // CUSTOMER - CREATE


    /**
   * @swagger
   * /api/customer:
   *  post:
   *      summary: CUSTOMER - CREATE
   *      tags: ['Customers']
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



    //CUSTOMER - UPDATE
    /**
  * @swagger
  * /api/customer/{id}:
  *  patch:
  *      summary: CUSTOMER - UPDATE
  *      tags: ['Customers'] 
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




    //CUSTOMER - DELETE

    /**
     * @swagger
     * /api/customer/{id}:
     *  delete:
     *      summary: CUSTOMER - DELETE BY ID
     *      tags: ['Customers']
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
 



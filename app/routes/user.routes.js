const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config()



module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  




  const options ={
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'orderTaker-Api',
        version: '1.0.0'
      },
      servers: [
        {
          servers: 'mongodb://docampaign.online:27017/order_taker',
          url: 'http://localhost:27012/'  
        }
      ]
    },
    apis: ['./app/routes/user.routes.js']
  }

const swaggerDocs = swaggerJsDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

 

/**
 * @swagger
 * components:
 *      schemas:
 *           user:
 *              type: object
 *              properties: 
 *                    _id: 
 *                        type: string
 *                    email_address: 
 *                        type: string
 *                    username: 
 *                         type: string
 *                    password: 
 *                         type: string
 *                    notes: 
 *                         type: string
   *           User:
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
   *                    username:
   *                         type: string
   *                    contact:
   *                         type: string
   *                    email_address:
   *                         type: string
   *                    password:
   *                         type: string
   *                    notes:
   *                         type: string
 */

                        // USER GET ALL


/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: USER - GET ALL
 *      description: this api is used to fetch all users from mongodb
 *      responses: 
 *          200:
 *              description: to get all users data
 *              content: 
 *                  apllication/json:
 *                      schema:
 *                           type: array
 *                           items: 
 *                              $ref: '#components/schemas/user'
 */
  app.get("/api/users", controller.handleGetAll);









                    // USER - GET BY ID
   /**
   * @swagger
   * /api/user/{id}:
   *  get:
   *      summary: USER - GET BY ID
   *      description: this api is used to fetch user by ID
   *      parameters:
   *          - in: path
   *            name: id
   *            required: true
   *            description: user ID required
   *            schema:
   *              type: string
   *      responses: 
   *          200:
   *              description: to get user
   *              content: 
   *                  apllication/json:
   *                      schemas:
   *                           type: array
   *                           items: 
   *                              $ref: '#components/schemas/user'
   */
  app.get("/api/user/:id", controller.handleGetById);


                    // USER - CREATE


  /**
 * @swagger
 * /api/user:
 *  post:
 *      summary: USER - CREATE
 *      description: this api is used to create users
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/User'
 *      responses: 
 *          200:
 *              description: used to create users
 */
  app.post(
    "/api/user",
    controller.handleCreate
  );

  //Update
  app.patch(
    "/api/user/:id",
    controller.handleUpdateById
  );
  
  

  //Delete
  app.delete("/api/user/:id", controller.handleDeleteById);


};
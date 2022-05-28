const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/role.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
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
       *           Role:
       *              type: object
       *              properties:
       *                    title:
       *                        type: string
       *                    notes:
       *                        type: string
     */




                // ROLE - GET ALL
  /**
   * @swagger
   * /api/roles:
   *  get:
   *      summary: ROLE - GET ALL
   *      description: this api is used to fetch all roles from mongodb
   *      responses: 
   *          200:
   *              description: to get all ROLE data
   *              content: 
   *                  apllication/json:
   *                      schema:
   *                           type: array
   *                           items: 
   *                              $ref: '#components/schemas/Role'
   */

  app.get("/api/roles", controller.handleGetAll);
  
  
  
  
                      // ROLE - GET BY ID
  /**
* @swagger
* /api/role/{id}:
*  get:
*      summary: ROLE - GET BY ID
*      description: this api is used to fetch role by ID
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: role ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get role
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Role'
*/                    
                      
  app.get("/api/role/:id", controller.handleGetById);


                              //ROLE - CREATE
  /**
 * @swagger
 * /api/roles:
 *  post:
 *      summary: ROLE - CREATE
 *      description: this api is used to create role
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Role'
 *      responses: 
 *          200:
 *              description: used to create roles
 */                              
  app.post(
    "/api/roles",
    controller.handleCreate
  );

                                //ROLE - UPDATE
  /**
* @swagger
* /api/role/{id}:
*  patch:
*      summary: ROLE - UPDATE
*      description: this api is used to update role data
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: role ID required
*            schema:
*              type: string
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schemas/Role'
*      responses: 
*          200:
*              description: used to update roles
*              content: 
*                  apllication/json:
*                      schema:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Role'
*/                                
  app.patch(
    "/api/role/:id",
    controller.handleUpdateById
  );


  

                        //ROLE - DELETE
  /**
 * @swagger
 * /api/role/{id}:
 *  delete:
 *      summary: ROLE - DELETE BY ID
 *      description: this api is used to delete role by ID
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: role ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: to delete role
 *              content: 
 *                  apllication/json:
 *                      schemas:
 *                           type: array
 *                           items: 
 *                              $ref: '#components/schemas/Role'
 */                      
  app.delete("/api/role/:id", controller.handleDeleteById);


};
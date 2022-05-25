const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/notification.controller");
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
       *           Notifications:
       *              type: object
       *              properties:
       *                    title:
       *                        type: string
       *                    content:
       *                        type: string
       *                    type:
       *                        type: string
       *                    status: 
       *                        type: string
       *                    notes:
       *                        type: string
     */






                            //Notifications - Create
    /**
         * @swagger
         * /api/notification:
         *  post:
         *      summary: NOTIFICATIONS - CREATE
         *      description: this api is used to create Notifications
         *      requestBody:
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: '#components/schemas/Notifications'
         *      responses: 
         *          200:
         *              description: used to create Notifications
         */
    app.post(
        "/api/notification",
        controller.handleCreate
    );

                            //Notifications - Update
    /**
      * @swagger
      * /api/notification/{id}:
      *  patch:
      *      summary: NOTIFICATIONS - UPDATE
      *      description: this api is used to update Notifications data
      *      parameters:
      *          - in: path
      *            name: id
      *            required: true
      *            description: Notifications ID required
      *            schema:
      *              type: string
      *      requestBody:
      *          required: true
      *          content:
      *              application/json:
      *                  schema:
      *                      $ref: '#components/schemas/Notifications'
      *      responses: 
      *          200:
      *              description: used to update Notifications
      *              content: 
      *                  apllication/json:
      *                      schema:
      *                           type: array
      *                           items: 
      *                              $ref: '#components/schemas/Notifications'
      */
    app.patch(
        "/api/notification/:id",
        controller.handleUpdateById
    );

                            //Notifications - Get All
    /**
       * @swagger
       * /api/notifications:
       *  get:
       *      summary: NOTIFICATIONS - GET ALL
       *      description: this api is used to fetch all Notifications from mongodb
       *      responses: 
       *          200:
       *              description: to get all Notifications data
       *              content: 
       *                  apllication/json:
       *                      schema:
       *                           type: array
       *                           items: 
       *                              $ref: '#components/schemas/Notifications'
       */
    app.get("/api/notifications", controller.handleGetAll);

                            //Notifications -  Get by ID
    /**
* @swagger
* /api/notification/{id}:
*  get:
*      summary: NOTIFICATIONS - GET BY ID
*      description: this api is used to fetch Notifications
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Notifications ID required
*            schema:
*              type: string
*      responses: 
*          200:
*              description: to get Notifications
*              content: 
*                  apllication/json:
*                      schemas:
*                           type: array
*                           items: 
*                              $ref: '#components/schemas/Notifications'
*/
    app.get("/api/notification/:id", controller.handleGetById);


                            //Notifications - Delete
    /**
     * @swagger
     * /api/notification/{id}:
     *  delete:
     *      summary: NOTIFICATIONS - DELETE BY ID
     *      description: this api is used to delete Notifications by ID
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: Notifications ID required
     *            schema:
     *              type: string
     *      responses: 
     *          200:
     *              description: to delete Notifications
     *              content: 
     *                  apllication/json:
     *                      schemas:
     *                           type: array
     *                           items: 
     *                              $ref: '#components/schemas/Notifications'
     */
    app.delete("/api/notification/:id", controller.handleDeleteById);


};
require('dotenv').config()

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
   



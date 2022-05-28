require('dotenv').config()
const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
};





app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




const options = {
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
  apis: ['./app/routes/user.routes.js', './app/routes/customer.routes.js', './app/routes/role.routes.js', './app/routes/purchase.routes.js', './app/routes/product.routes.js', './app/routes/payment.routes.js', './app/routes/order.routes.js', './app/routes/order_item.routes.js', './app/routes/notification.routes.js', './app/routes/inventory.routes.js', './app/routes/category.routes.js', './app/routes/business.routes.js', './app/routes/pricing.routes.js']
}




const swaggerDocs = swaggerJsDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))



const db = require("./app/models");
const Role = db.roles;



db.mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    return;
  });


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        title: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        title: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        title: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}



// simple route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to alayon order taker application." });
});




require('./app/routes/auth.routes')(app);
require('./app/routes/data.routes')(app);




//Core CRUD
require('./app/routes/user.routes')(app);
require('./app/routes/role.routes')(app);
require('./app/routes/purchase.routes')(app);
require('./app/routes/product.routes')(app);
require('./app/routes/payment.routes')(app);
require('./app/routes/order.routes')(app);
require('./app/routes/order_item.routes')(app);
require('./app/routes/notification.routes')(app);
require('./app/routes/inventory.routes')(app);
require('./app/routes/customer.routes')(app);
require('./app/routes/category.routes')(app);
require('./app/routes/business.routes')(app);
require('./app/routes/pricing.routes')(app);






// set port, listen for requests
const PORT = process.env.PORT || 27012;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
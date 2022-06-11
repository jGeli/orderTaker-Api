require('dotenv').config()
const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
};



app.use('/api/static', express.static(process.env.RESOURCE_PATH));


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: '100mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false, limit: '100mb' }));





const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BugTech - Order Taker Api',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:23000/'
      },
      {
        url: 'https://docampaign.online:23000'
      }
    ]
  },
  apis: ['./app/swagger/user.swagger.js', './app/swagger/customer.swagger.js', './app/swagger/role.swagger.js', './app/swagger/purchase.swagger.js', './app/swagger/product.swagger.js', './app/swagger/payment.swagger.js', './app/swagger/order.swagger.js', './app/swagger/order_item.swagger.js', './app/swagger/notification.swagger.js', './app/swagger/inventory.swagger.js', './app/swagger/category.swagger.js', './app/swagger/business.swagger.js', './app/swagger/pricing.swagger.js']
}




const swaggerDocs = swaggerJsDoc(options)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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
    
      db.ROLES.forEach(a => {
        new Role({
          title: a
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log(`added ${a} to roles collection`);
        });
      })
    }
  });
}

// simple route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to alayon order taker application." });
});



//Core Routes
require('./app/coreRoutes/auth.routes')(app);
require('./app/coreRoutes/data.routes')(app);
require('./app/coreRoutes/file.routes')(app);



//CRUD Routes
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
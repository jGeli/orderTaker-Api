
require('dotenv').config()
const express = require("express");

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





const dbConfig = require('./app/config/db.config');
const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://localhost:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
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
  res.json({ message: "Welcome to alayon order taker application."});
});




require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);




// set port, listen for requests
const PORT = process.env.PORT || 27012;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
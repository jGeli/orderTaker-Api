const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: { text: "No token provided!", type: 'error' } });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: { text: "Unauthorized!" , type: 'error' }});
    }
    req.userId = decoded.id;
    next();
  });
};
isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({message: { text: "Something went wrong!" , type: 'error' }});
      return;
    }
    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: { text: "Something went wrong!" , type: 'error' } });
          return;
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].title === "admin") {
            next();
            return;
          }
        }
        res.status(403).send({ message: { text: "Require Admin Role!" , type: 'error' } });
        return;
      }
    );
  });
};
isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({message: { text: "Something went wrong!" , type: 'error' } });
      return;
    }
    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: { text: "Something went wrong!" , type: 'error' } });
          return;
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].title === "moderator") {
            next();
            return;
          }
        }
        res.status(403).send({ message: { text: "Require Moderator Role!" , type: 'error' } });
        return;
      }
    );
  });
};
const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};
module.exports = authJwt;

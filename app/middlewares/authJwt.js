const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const UserServices = require("../services/user.services");
const User = db.users;
const Role = db.roles;


verifyToken = (req, res, next) => {

  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    return res.status(403).json({ text: 'Unauthorized', type: 'error' });
  }

  if (!idToken) {
    return res.status(403).send({ message: { text: "No token provided!", type: 'error' } });
  }

    jwt.verify(idToken, config.secret, async (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: { text: "Unauthorized!" , type: 'error' }});
    }

    let user = await User.findById(decoded.id);
    if(!user) return res.status(401).send({ message: { text: "User not found!" , type: 'error' }});
    if(user.suspended_by) {

    return res.status(401).send({ message: { text: "Account has been suspended!" , type: 'error' }});
    }
    if(!user.suspended_by && user.status === 'inactive'){
      await UserServices.updateRecord(decoded.id, { status: 'active' })
    }
      req.userId = decoded.id;
      req.business = user.business
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

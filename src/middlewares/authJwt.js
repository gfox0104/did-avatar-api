const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const appConfig = require("../../config/app.config.js");

verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .send({ message: "No token provided!" });
  }

  jwt.verify(token, appConfig.JWT_SIGNING_KEY, (err, decoded) => {
    if (err) {
      console.log(err);
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "Unauthorized!" });
    }

    req.userId = decoded.id;
    req.email = decoded.email;
    req.accessToken = token;
    next();
  });
};

hasRoles = (roles) => {
  return (
    hasRoles[roles] ||
    (hasRoles[roles] = function (req, res, next) {
      let isAllowed = false;

      roles.forEach((role) => {
        if (role === req.role) {
          isAllowed = true;
        }
      });

      if (!isAllowed) {
        res.status(StatusCodes.UNAUTHORIZED).send({ message: "Unauthorized" });
      } else {
        next();
      }
    })
  );
};

const authJwt = {
  verifyToken,
  hasRoles,
};
module.exports = authJwt;

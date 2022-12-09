const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')

dotenv.config()
const verifyToken = (req, res, next) => {
  const fromAuthForm = (token) => (token ? token.split(" ")[1] : undefined);

  const authHeader =
    fromAuthForm(req.headers["Authorization"]) ??
    fromAuthForm(req.headers["authorization"]) ??
    fromAuthForm(req.headers["x-auth-token"]);

  if (authHeader) {
    jwt.verify(authHeader, process.env.JWT_SEC, (err, user) => {
      console.log(user)
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};


const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAdmin,
};

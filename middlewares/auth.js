const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  const token = req.cookies.jwttoken;
  if (!token)
    return res.status(401).render("login", {
      name: "Sign in",
      urlName: "login",
      err: ""
    });
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = auth;

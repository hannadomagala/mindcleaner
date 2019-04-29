const express = require("express");
const router = express.Router();

/* GET login */

router.get("/", async (req, res) => {
  res.render("login", {
    name: "Sign in",
    urlName: "login"
  });
});

module.exports = router;

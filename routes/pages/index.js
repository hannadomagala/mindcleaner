var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inbox', { page: 'Home', menuId:'inbox' });
});

module.exports = router;

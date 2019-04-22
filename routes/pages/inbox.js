var express = require('express');
var router = express.Router();

/* GET inbox */
router.get('/', function(req, res, next) {
  res.render('inbox', { name: 'Inbox', description: 'thoughts to analyze' });
});

module.exports = router;

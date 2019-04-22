var express = require('express');
var router = express.Router();

/* GET somedayk */
router.get('/', function(req, res, next) {
  res.render('tasks', { name: 'Someday', description: 'tasks waiting to be planned' });
});

module.exports = router;
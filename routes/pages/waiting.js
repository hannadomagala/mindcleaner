var express = require('express');
var router = express.Router();

/* GET waiting */
router.get('/', function(req, res, next) {
  res.render('tasks', { name: 'Waiting', description: 'tasks waiting to be done by someone' });
});

module.exports = router;
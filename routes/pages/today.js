var express = require('express');
var router = express.Router();

/* GET today */
router.get('/', function(req, res, next) {
  res.render('tasks', { name: 'Today', description: 'tasks to be done today' });
});

module.exports = router;
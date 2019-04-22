var express = require('express');
var router = express.Router();

/* GET this week */
router.get('/', function(req, res, next) {
  res.render('tasks', { name: 'This week', description: 'tasks to be done this week' });
});

module.exports = router;
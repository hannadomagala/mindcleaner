var express = require('express');
var router = express.Router();

/* GET all */
router.get('/', function(req, res, next) {
  res.render('tasks', { name: 'All tasks', description: 'tasks to be done' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET donek */
router.get('/', function(req, res, next) {
  res.render('tasks', { name: 'Done', description: 'tasks done' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('baseUrl: ' + req.baseUrl);
  console.log('originalUrl: ' + req.originalUrl);
  console.log(req.cookies);
  console.log(req.query);
  res.render('index', { title: 'Express' });
});

module.exports = router;

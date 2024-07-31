var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/doador', function(req, res, next) {
    res.render('doador');
  });
  
  router.get('/veterinaria', function(req, res, next) {
    res.render('veterinaria');
    });

module.exports = router;

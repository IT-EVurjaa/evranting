var express = require('express');
var router = express.Router();
var usermodel= require('../model/usermodel')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/battery', function(req, res, next) {
  res.render('battery');
});

router.get('/onof', function(req, res, next) {
  res.render('onof');
});

router.post('/turnOnoff', function(req, res, next) {  //1
  usermodel.turnOnOffcharging(req.body).then(result=>{
    // res.json({'status':true})
})
  res.render('onof');
});

module.exports = router;

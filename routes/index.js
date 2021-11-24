var express = require('express');
var router = express.Router();
var canmodel= require('../model/canmodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//api for get json of last 100 data of candata
router.get('/showdata',function(req,res){
  canmodel.showtestdata(function(result){
      // res.json({'data':result})
      res.render('showtable',{'data':result});

  })
});


module.exports = router;

var express = require('express');
var router = express.Router();
var usermodel= require('../model/usermodel')
const bodyParser = require('body-parser')
const {check,validationResult} = require('express-validator');
const { response, request } = require('express');
const urlencoder =bodyParser.urlencoded({extended:false})
/* get Home page */
router.get('/', function(req, res, next) {
  res.render('index');
});

// get battery page
router.get('/battery', function(req, res, next) {
  res.render('battery',{success:''});
});

router.get('/driver', function(req, res, next) {
  res.render('driver',{success:''});
});

router.get('/onof', function(req, res, next) {
  res.render('onof');
});




router.post('/addbateryform', urlencoder,[
  check('batteryId',' wrong detail')
  .exists()
  .isLength({min:3})
 ]
 ,function(req, res, next) {
  const error = validationResult(req)
  if(!error.isEmpty()){
      const alert =error.array()
      res.render('battery',{
          alert,success:''
      })
  }

  //  insert code to the mongodb
  usermodel.insertbatterdata(req.body,(data,result)=>{
    if(data==1){
      console.log("insert 1");
      // res.render('battery' )

      res.render('battery', {success:'insert'});



    }
    else{
      data=0
    }
 
})

});



router.post('/adddriverform', urlencoder,[
  check('mobile',' wrong mobile number')
  .exists()
  .isLength({min:10})
 ]
 ,function(req, res, next) {
  const error = validationResult(req)
  if(!error.isEmpty()){
      const alert =error.array()
      res.render('battery',{
          alert,success:''
      })
  }


  //  insert code to the mongodb
  usermodel.insertDriverData(req.body,(data,result)=>{
    if(data==1){
      console.log("insert 1");
      // res.render('battery' )

      res.render('battery', {success:'insert'});



    }
    else{
      data=0
    }
 
})
console.log(req.body);

});


router.post('/turnOnoff', function(req, res, next) {  
  usermodel.turnOnOffcharging(req.body).then(result=>{
    // res.json({'status':true})
})
  res.render('onof');
});

module.exports = router;

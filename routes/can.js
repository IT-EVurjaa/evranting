var express = require('express');
var router = express.Router();
var canmodel= require('../model/canmodel')

/* GET home page. */
router.post('/canmodel', function(req, res, next) {
    // console.log(req.body);

    canmodel.convert_data(req.body,(data,result)=>{
      
      canmodel.insertCandataIntoDb(data, function(result){
        
      })  
      canmodel.checkResponseDb(req.body, function(result){
        let adminresponse =result[0].IotMode  
   
       var show_Rs,rs=parseInt((adminresponse));
       if(rs==000){
           show_Rs="MHd_000_MFt"
       }
       else if(rs==001){
          show_Rs="MHd_001_MFt"
       }
       else if(rs==010){
         show_Rs="MHd_010_MFt"
      }
       else if(rs==011){
         show_Rs="MHd_011_MFt"
      }
       else{
         show_Rs="MHd_000_MFt"
       }
       console.log(show_Rs);
         res.send(show_Rs).end()
   
       })
    })   

});





module.exports = router;

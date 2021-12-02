var mongoose= require('mongoose')
// var url="mongodb+srv://evranting:evranting@cluster0.juie3.mongodb.net/evranting?retryWrites=true&w=majority"
var url="mongodb+srv://evurjaaTestDb:qwerty2000@cluster0.rgxyz.mongodb.net/ESavari_15ZJul?retryWrites=true&w=majority"

// local machin
// var url="mongodb://localhost:27017/"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,result){
    if(err){
        throw err
    }
    else{
        console.log(' evranting db connection')
    }
})

var can= mongoose.connection
module.exports=can
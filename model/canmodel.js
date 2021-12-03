const db= require('./conn')
var moment = require('moment-timezone')

function convert_data(data,cb){
    // convert network soc
    var show_Ns,ns=parseInt((data.NetworkStatus));
    if(ns>=18){
        show_Ns="Good"
    }
    else if(ns>=15 && ns <18){
        show_Ns="Moderate"
    }
    
    else if( ns <15 ){
        show_Ns="Poor"
    }
    else{
        show_Ns="Wrong input"
    }
    data.NetworkStatus=show_Ns

    // convert load status
    var show_Ls,ls=parseInt((data.LoadStatus));
    if(ls==0){
        show_Ls="No Load"
    }
    else if(ls==1){
        show_Ls="Load Conneted"
    }
    
    else if( ls==2 ){
        show_Ls="Charger Conneted"
    }
    else if( ls==3 ){
        show_Ls="Discharging"
    }
    else if( ls==4 ){
        show_Ls="charging"
    }
    else{
        show_Ls="Wroung input"
    }
    data.LoadStatus=show_Ls

    time=moment().tz('Asia/kolkata').format('YYYY-MM-DD HH:mm:ss')
    var dt={'batteryId':data.batteryId,
            'LocationLAT':data.LocationLAT,
            'LocationLONG':data.LocationLONG,
            'NetworkStatus':data.NetworkStatus,
            'socper':data.socper,
            'time':moment().tz('Asia/Kolkata')._d,
            "current":data.current,
            'voltage':data.voltage,
            'Hightemp':data.Hightemp,
            'IotMode':data.IotMode,
            'LoadStatus':data.LoadStatus,
            'Cycles':data.Cycles}
   
    cb(dt)

}

function insertCandataIntoDb(data,cb){

        DbName="EVRanting";
        db.useDb(DbName).collection('candata').insertOne(data,function(err,res){
            if(err){
                throw err
            }
            else{
                cb(res)
            }
        })
     
}

function checkResponseDb(data,cb){
    DbName="EVRanting";
    db.useDb(DbName).collection('candata').aggregate([{$match:{batteryId:data.batteryId}},{$sort:{"time":-1}},{ $limit : 1}]).toArray(function(err,res){          
                if(err){
                    throw err
                }
                else{
                    cb(res)
                }

    }
    )

}

function showtestdata(cb){
    DbName="EVRanting";
    db.useDb(DbName).collection('candata').aggregate([{$sort:{time:-1}}]).limit(100).toArray(function(err,res){
        cb(res)
        console.log(res);
    })
}

module.exports ={ convert_data,insertCandataIntoDb,checkResponseDb,showtestdata}
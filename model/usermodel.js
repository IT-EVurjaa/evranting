const db= require('./conn')

async function turnOnOffcharging(data){
    console.log(data.turnOnOff)
    // var relay=false
    // if(data.turnOnOff){
    //     relay=true
    // }
    // return await db.collection('battery_status_table').updateOne({'batteryId':data.batteryId},{$set:{'relay':relay,'validateRelay':false}})
}
async function insertbatterdata(data ,cb){

    var dt={
    'batteryId':data.batteryId,
    'iotdevice':data.iotdevice,
    'imei':data.imei,
    'invoice':data.invoice,
    'lifecycle':data.lifecycle,
    'purchasedate':data.purchasedate,
    'warrentydate':data.warrentydate,
    'batterymanufature':data.batterymanufature,
    'DS_img':data.DS_img,
    'CDS_img':data.CDS_img,
    'purchase_img':data.purchase_img
}

    DbName="EVRanting";
    db.useDb(DbName).collection('batterytable').insertOne(dt,function(err,res){
        if(err){
            throw err
        }
        else{
            cb(1)
        }
    })
}









module.exports ={ turnOnOffcharging,insertbatterdata}
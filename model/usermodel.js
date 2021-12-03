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



async function insertDriverData(data ,cb){

    var dt={
    'PoiletAadharNumber':data.PoiletAadharNumber,
    'PoiletName':data.PoiletName,
    'DrivingLicenseNumber':data.DrivingLicenseNumber,
    'VehicleRegistrationNumber':data.VehicleRegistrationNumber,
    'HouseNo':data.HouseNo,
    'Landmark':data.Landmark,
    'Area':data.Area,
    'City':data.City,
    'Pincode':data.Pincode,
    'gender':data.gender,
    'profile_img':data.profile_img,
    'vehicle_img':data.vehicle_img,
    'AC_img':data.AC_img,
    'DL_img':data.DL_img,
    'VR_img':data.VR_img,
    'AP_img':data.AP_img,
    'VI_img':data.VI_img,
    'cheque_img':data.cheque_img,
    'PB_img':data.PB_img,
    'mobile':data.mobile,
    'secMobile':data.secMobile,

}

    DbName="EVRanting";
    db.useDb(DbName).collection('drivertable').insertOne(dt,function(err,res){
        if(err){
            throw err
        }
        else{
            cb(1)
        }
    })
}









module.exports ={ turnOnOffcharging,insertbatterdata,insertDriverData}
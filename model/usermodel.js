const db= require('./conn')

async function turnOnOffcharging(data){
    console.log(data.turnOnOff)
    // var relay=false
    // if(data.turnOnOff){
    //     relay=true
    // }
    // return await db.collection('battery_status_table').updateOne({'batteryId':data.batteryId},{$set:{'relay':relay,'validateRelay':false}})
}








module.exports ={ turnOnOffcharging}
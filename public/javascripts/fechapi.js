  let url = "http://34.71.1.227/getswapdata";

  let settings = { method: "Get" };
        

  fetch(url, settings)
      .then(res => res.json())
      .then((json) => {
        var month_swap=0;today_swap=0;
        var month_revenue=0;today_revenue=0;
          for(i=0;i<json.length;i++){
            /*if(moment(json[i].finishDateTime).tz('Asia/kolkata').format("MM")==moment().tz('Asia/Kolkata').format("MM")){
              month_swap=+1
            }
            if(moment(json[i].finishDateTime).tz('Asia/kolkata').format("MM-DD")==moment().tz('Asia/Kolkata').format("MM-DD")){
              today_swap=+1
            }*/
            if(moment(json[i].finishDateTime).format("MM")+''=='09'){
              month_swap=month_swap+1
              month_revenue=month_revenue+json[i].amountPaid
            }
            if(moment(json[i].finishDateTime).format("YYYY-MM-DD")+''=='2020-07-07'){
              today_swap=today_swap+1
              today_revenue=today_revenue+json[i].amountPaid
            }
          }
          console.log(month_swap)
          document.getElementById('swap_month').innerHTML(month_swap)

      });

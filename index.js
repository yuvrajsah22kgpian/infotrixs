
async function weatherinfo(q){
    let a=[];
    
    try {
        let response=await fetch("https://api.weatherapi.com/v1/current.json?key=68aab7ac8c0a435cbf1164929240601&q="+q+"&aqi=no",
    {
        method: "GET",
    }) 
    .then((response)=>response.json()).then((body)=>{
            console.log(body["current"]);
            a.push(body["current"]);
            console.log(a[0]["temp_c"]);
            document.getElementById("temp").innerHTML=a[0]["temp_c"];
            document.getElementById("humidity").innerHTML=a[0]["humidity"];
            }).catch((error) => {
            console.error("Error: ", error.message)});

    } catch (error) {
        console.log("ERROR: ",error)
    }
   
    //let data =response.then((res)=>res.json());
    //let a=data.then((obj)=>obj["current"]);
    //console.log(a);

   
}
// weatherinfo("ranchi");

// document.getElementById("temp").innerHTML=15+" "+"degree celcius";
// weatherinfo("ranchi");
document.getElementById("submit").addEventListener('click', function(){
   let q=document.getElementById("cityname").value;
   console.log("cityname",q);
    if(q !== ''){
        weatherinfo(q);
    }
});

document.getElementById("reset").addEventListener('click', function(){
    document.getElementById("temp").innerHTML="*Please Enter the  name of city";
    document.getElementById("humidity").innerHTML="*Please Enter the  name of city";
    document.getElementById("cityname").value=""

 });




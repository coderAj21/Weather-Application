console.log("pyar dedo dedo");
const App_id="c3c8fd219e5609f8b7b96f4b3a23e194";
 async function showWeather(){
    try{
        let city="Goa";
        const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${App_id}`);
        const data= await response.json();
        console.log("Weather Data =>",data);
        const temp=Math.floor(data?.main?.temp)-273;
        let para=document.createElement('p');
        para.textContent=`Temp is => ${temp}`;
        document.body.appendChild(para);

    }
    catch(err){
        // 
    }
}
async function getWeatherByLat(){
    try{
    let lat=28.473793;
    let lon=77.3392779;
    const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${App_id}`);
    const data= await result.json();
    console.log(data?.name);
    }
    catch(e){
        console.log( "Error found",e);
    }
}
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("No geoLocation Support");
    }
}
function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;
    console.log(lat," ",longi);
}
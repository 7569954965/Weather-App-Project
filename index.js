
const search=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const img=document.querySelector(".img-icon");


const apiKey="478a32917a0cececdc4e88869d0a95fe";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const checkWeather=async (city)=>{
    const res=await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(res.status == 404){
         document.querySelector(".error").style.display="block";
         document.querySelector(".weather-data").style.display="none";

    }else{
        const data =await res.json();

        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            img.src="images/cloud.png"
        }else if(data.weather[0].main == "Clear"){
            img.src="images/clear.png"
        }else if(data.weather[0].main == "Rain"){
            img.src="images/rain.png"
        }else if(data.weather[0].main == "Mist"){
            img.src="images/mist.png"
        }else if(data.weather[0].main == "Snow"){
            img.src="images/snow.png"
        }
    
        document.querySelector(".weather-data").style.display="block";
        document.querySelector(".error").style.display="none";

    }
    
}

btn.addEventListener("click",()=>{
    checkWeather(search.value);
    console.log(search.value)
})




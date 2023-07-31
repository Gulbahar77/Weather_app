const apikey ="a62d7f12090f16194aec97b0635b19e9";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

// https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        }

        else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 

    document.querySelector(".weather").style.display = "block";
   
        }
    

}
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
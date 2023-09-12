

async function getWeather(){
    let city = document.getElementById('city').value; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`;

    let resp = await fetch(apiUrl);
    console.log(resp.json()); 

    //return the weather info
    await fetch(apiUrl)
    .then((response) => {
        if(response.ok){
            return response.json()

        //alerts if the status is 404
        } else if(response.status === 404){
            alert("Unable to find city. Please try again.");
        } else if(response.status === 400){
            alert("Please enter a value.");
        }
    })
    .then(displayWeather);
}

function displayWeather(data){

    let weatherDetails = document.querySelector("#weather"); 
    let image = document.querySelector("#weather-img");
    let temperature = document.querySelector("#weather-temp"); 
    let description = document.querySelector("#weather-description");
    let humidity = document.querySelector("#weather-humidity");
    let windSpeed = document.querySelector("#wind-speed");

    weatherDetails.style.display = "block"; 

    image.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    temperature.innerHTML = `${Math.floor((data.main.temp - 273.15) * 9/5 + 32)}°F`;
    description.innerHTML = `${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.substring(1)}`; 
    humidity.innerHTML = `${data.main.humidity}% humidity`; 
    windSpeed.innerHTML = `${data.wind.speed} kmph`; 
  
}
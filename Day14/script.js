async function getWeather(){
    let city = document.getElementById('city').value; 
    //console.log(city);

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
        }
    })
    .then(displayData);
}

function displayData(data){
    document.getElementById('weather').innerHTML = 
    `
    <img src = "http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
    <p>Main: ${Math.floor((data.main.temp - 273.15) * 9/5 + 32)}°F</p>
    <p>Min: ${Math.floor((data.main.temp_min - 273.15) * 9/5 + 32)}°F</p>
    <p>Max: ${Math.floor((data.main.temp_max - 273.15) * 9/5 + 32)}°F</p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Description: ${data.weather[0].description}</p>
    <p>${data.wind.speed}</p>
    <p>Timezone: ${data.timezone}</p>
    `;
}
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
        } else if(response.status === 404){
            alert("Unable to find city. Please try again.");
        }
    })
    .then(displayData);
}

function displayData(data){
    document.getElementById('weather').innerHTML = 
    `<h3></h3>
    <p>Main: ${data.main.temp - 273.15}</p>
    <p>Min: ${data.main.temp_min}</p>
    <p>Max: ${data.main.temp_max}</p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Description: ${data.weather[0].description}</p>
    <p>${data.wind.speed}</p>
    <p>Timezone: ${data.timezone}</p>
    `;
}
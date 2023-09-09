async function getWeather(){
    let city = document.getElementById('city').value; 
    //console.log(city);

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`;

    let resp = await fetch(apiUrl);
    console.log(resp.json()); 

    //return the weather info
    await fetch(apiUrl)
    .then((response) => {return response.json()})
    .then(displayData);
}

function displayData(data){
    document.getElementById('weather').innerHTML = `
    <p>${data.main.temp}</p>
    <p></p>
    `;
}
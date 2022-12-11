function displayTemperature(response) {

    console.log(response.data.city);
    console.log(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round (response.data.temperature.current);
    cityElement.innerHTML = (response.data.city);
    descriptionElement.innerHTML = (response.data.condition.description);
    humidityElement.innerHTML = Math.round (response.data.temperature.humidity);
    windElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey = "49ecec9d222e3fb8o4502323fetf4ac1";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Rome&key=49ecec9d222e3fb8o4502323fetf4ac1&units=metric";

  
  axios.get(apiUrl).then(displayTemperature);


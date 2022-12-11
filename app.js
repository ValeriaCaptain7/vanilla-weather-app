function displayTemperature(response) {

    console.log(response.data.city);
    console.log(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round (response.data.temperature.current);
    cityElement.innerHTML = (response.data.city);
}


let apiKey = "49ecec9d222e3fb8o4502323fetf4ac1";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Rome&key=49ecec9d222e3fb8o4502323fetf4ac1&units=metric";

  
  axios.get(apiUrl).then(displayTemperature);


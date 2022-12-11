function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {

    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    temperatureElement.innerHTML = Math.round (response.data.temperature.current);
    cityElement.innerHTML = (response.data.city);
    descriptionElement.innerHTML = (response.data.condition.description);
    humidityElement.innerHTML = Math.round (response.data.temperature.humidity);
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.time * 1000);
    iconElement.setAttribute(
      "src",
      `https://api.shecodes.io/weather/v1/current?query=Rome&icon=${response.data.condition.icon}&key=49ecec9d222e3fb8o4502323fetf4ac1`
    );
    iconElement.setAttribute("alt", response.data.condition.description);
}

function search(city) {
    let apiKey = "49ecec9d222e3fb8o4502323fetf4ac1";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Rome&key=49ecec9d222e3fb8o4502323fetf4ac1&units=metric";
    axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

search("Rome");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


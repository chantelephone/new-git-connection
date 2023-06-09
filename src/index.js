//Notes from HTML
//class="weekday" taken drom div with id "todays-date"

//Date Java
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let now = new Date();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let date = now.getDate();
let day = days[now.getDay()];
let month = now.getMonth();

let todaysDate = document.querySelector("#todays-date");
todaysDate.innerHTML = `${day} | ${hour}:${minute}`;

//Search Java

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//C and F Links Java
//Celsius

let tempMain = document.querySelector("span.tempMain");

function unitCelsius(event) {
  event.preventDefault();
  tempMain.innerHTML = `20°`;
}

let celsius = document.querySelector("#celsius-temp");
celsius.addEventListener("click", unitCelsius);

//Farenheit

function unitFarenheit(event) {
  event.preventDefault();
  tempMain.innerHTML = `66°`;
}

let farenheit = document.querySelector("#farenheit-temp");
farenheit.addEventListener("click", unitFarenheit);

//API

//Currrent Button

//let currentCondition = document.querySelector("#current-button");
//currentCondition.addEventListener("click", currentButton);

function currentButton(event) {
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLLocaton(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "1f7f3a597d64a4a0df938518bb0ba1fe";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric";

  axios.get(apiUrl).then(showCurrentConditions);
}

function showCurrentConditions(response) {
  let cityHeading = document.querySelector("#city-input").value;
  cityHeading.innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  let headingTemp = document.querySelector("tempMain");
  headingTemp.innerHTML = `${temperature}°`;

  document.querySelector("#current-humidity").innerHTML =
    response.data.main.humidity;

  document.querySelector("#current-wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

//Search Bar
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchBar);

function searchBar(event) {
  let apiKey = "1f7f3a597d64a4a0df938518bb0ba1fe";
  let city = document.querySelector("#city-input").value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";
  axios.get(apiUrl).then(showCity);
}

function showCity(response) {
  let cityHeading = document.querySelector("#city-input").value;
  cityHeading.innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  let headingTemp = document.querySelector("tempMain");
  headingTemp.innerHTML = `${temperature}°`;

  document.querySelector("#current-humidity").innerHTML =
    response.data.main.humidity;

  document.querySelector("#current-wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

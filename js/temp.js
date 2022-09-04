const cityName = document.getElementById("city");
const searchBtn = document.getElementById("search-btn");
const inputField = document.getElementById("input-field");
const temp = document.getElementById("temp");

const weather = document.getElementById("weather");

const tempreture = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=643b66b0cef2df9ed5ae7d79d7757311&units=metric`
  )
    .then((res) => res.json())
    .then((data) => displayTemprature(data));
};
// const functionId = (id, text) => {
//   const temparture = document.getElementById(id);
//   temparture.innerText = text;
// };
const displayTemprature = (data) => {
  cityName.innerText = data.name;
  temp.innerText = data.main.temp;

  weather.innerText = data.weather[0].main;
};

searchBtn.addEventListener("click", function () {
  const inputFieldValue = inputField.value;

  tempreture(inputFieldValue);
  inputField.value = "";
});

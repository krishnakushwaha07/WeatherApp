const url =
  "https://api.weatherapi.com/v1/current.json?key=485c1438aead4ac1894132431250307&q=";

const city = document.querySelector("#input");
const temp = document.querySelector("#temp");
const cityName = document.querySelector("#location p");
const msg = document.querySelector("#temptext p");
const icon = document.querySelector("#temptext img");
const humidity = document.querySelector("#humidity span");
const feelslike = document.querySelector("#feelslike span");
const wind = document.querySelector("#wind span");
const visibility = document.querySelector("#visibility span");
const uv = document.querySelector("#uv span");
const pressure = document.querySelector("#pressure span");

let weather = async (city) => {
  const newUrl = `${url}${city}`;
  const response = await fetch(newUrl);
  const data = await response.json();

  cityName.innerText = `${data.location.name} ${data.location.region},${data.location.country}`;
  temp.innerText = `${data.current.temp_c}`;
  msg.innerText = data.current.condition["text"];
  icon.src = data.current.condition["icon"];
  humidity.innerText = data.current.humidity;
  feelslike.innerText = data.current.feelslike_c;
  wind.innerText = data.current.wind_kph;
  visibility.innerText = data.current.vis_km;
  uv.innerText = data.current.uv;
  pressure.innerText = data.current.pressure_mb;
};

city.addEventListener("change", () => {
  weather(city.value.trim());
});

window.addEventListener("load", () => {
  weather("kanpur");
});

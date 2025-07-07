const url =
  "https://api.weatherapi.com/v1/current.json?key=485c1438aead4ac1894132431250307&q=";

const defaultCity = "kanpur";
const cityInput = document.querySelector("#input");
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
const button = document.querySelector("#btn");

let weather = async (city) => {
  if (city === "") {
    cityName.innerText = "Please enter a valid location";
    setTimeout(() => {
      weather(defaultCity);
    }, 1000);
    return;
  }
  const newUrl = `${url}${city}`; // prepare new url
  const response = await fetch(newUrl);
  if (response.ok) {
    const data = await response.json();

    cityName.innerText = `${data.location.name} ${data.location.region},${data.location.country}`;
    temp.innerText = `${data.current.temp_c}°C`;
    msg.innerText = data.current.condition["text"];
    icon.src = data.current.condition["icon"];
    humidity.innerText = data.current.humidity;
    feelslike.innerText = `${data.current.feelslike_c}°C`;
    wind.innerText = `${data.current.wind_kph} kph`;
    visibility.innerText = `${data.current.vis_km} km`;
    uv.innerText = data.current.uv;
    pressure.innerText = data.current.pressure_mb;
  }
};

button.addEventListener("click", () => {
  weather(cityInput.value.trim());
  cityInput.value = "";
});

window.addEventListener("load", () => {
  weather(defaultCity);
});

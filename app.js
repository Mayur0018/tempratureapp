let search = document.querySelector(".search");
let temp = document.querySelector(".temp");
let City = document.querySelector(".City");
let humadity = document.querySelector(".humadity");
let wind = document.querySelector(".wind");
let searchbox = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let waetherIcone = document.querySelector(".waether-icone");
let waetherinfo = document.querySelector(".weather");
let error = document.querySelector(".error")
let myKey = "2fb683ea5b77694d5c26cf9d92d31617";
let myURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let getInfo = async (city) => {
   const response = await fetch(myURL + city + `&appid=${myKey}`);
   if (response.status == 404) {
      error.style.display = "block";
      waetherinfo.style.display = "none";
   } else {
      let data = await response.json();
      City.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + "°C";
      humadity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + "Km/h";

      if (data.weather[0].main == "Clear") {
         waetherIcone.src = "images/clear.png";

      } else if (data.weather[0].main == "Clouds") {
         waetherIcone.src = "images/clouds.png";

      } else if (data.weather[0].main == "Drizzle") {
         waetherIcone.src = "images/drizzle.png";

      } else if (data.weather[0].main == "Rain") {
         waetherIcone.src = "images/rain.png";

      } else if (data.weather[0].main == "Mist") {
         waetherIcone.src = "images/mist.png";
      } else if (data.weather[0].main == "Snow") {
         waetherIcone.src = "images/snow.png";
      }
      waetherinfo.style.display = "block";
      error.style.display = "none";
   }

}
searchbtn.addEventListener("click", () => {
   getInfo(searchbox.value);
})



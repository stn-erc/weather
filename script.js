let weather = {
    apiKey: "9d96d6a1b7d9244cdbb66baf3477598a",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
           + city
           + "&units=metric&appid=" 
           + this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
    const { name } = data;
    const { icon , description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:  " + humidity + "%";
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".wind").innerText = "Wind speed:  " + speed + "m/s";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/2560x1440/?" + name + "')"
    }, 

    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
   };
    
   document.querySelector(".button").addEventListener("click", function () {
    weather.search();
   });

   document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
    
weather.fetchWeather("Tartu");

let weather = {
    "apiKey": "6dc79b80049a1ff901ce09d05e030156",
    fetchWeather: function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    },
    showWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = "Temperature: " + (Math.round(temp)) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + (Math.round(speed)) + "km/h";
        
        if(icon === "03d") {
            document.querySelector(".icon").src = "https://image.flaticon.com/icons/png/64/1146/1146930.png";
        }

        document.body.style.backgroundImage = "url('https://source.unsplash.com/2560x1440/?" + name + "')";

      },
    search: function() {
        this.fetchWeather(document.querySelector(".searchbar").value); 
    }
}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keypress", function(enter){
    if (enter.key == "Enter") {
        weather.search();
    }
})

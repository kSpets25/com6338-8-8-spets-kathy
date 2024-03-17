// Your code here

//get weather, form and button elements
//attach fetch call to the button element click
//use https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={currentWeather} 
//map needs to be based on location
//input should display not found if no location
//render map with (city name h2) (an (a) hyperlink href google map link) (img icon of weather conditions) (
    //p text of current, feels like, and last updated conditions, )
//create .catch function (err) to catch errors.

var weatherEl = document.getElementById("weather")
var userQuery = document.getElementById("weather-search")
const btn = document.querySelector("button")

const clickHandler = () => {
    var userQuery = "weather-search";
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather"
    var queryString = "?units=imperial&appid=8907802964041b9d0da4e362e4a9789c=" + userQuery
    var fetchURL = weatherUrl + queryString

    fetch("https://api.openweathermap.org/data/2.5/weather?q=fetchURL&appid=8907802964041b9d0da4e362e4a9789c") 
        .then (function(res) {
        return results.json()
        console.log(res)
    })
        .then(locationData)
        
}
btn.addEventListener('click', clickHandler);
   
    function locationData(data){console.log("my results", data)
        console.log(data.main)
        console.log(data.weather)
        console.log(data.name)
        console.log(data.main.temp)
        
        var h2 = document.createElement('h2')
        h2.textContent = data.name
        weatherEl.appendChild(h2)

        var temp = document.createElement('temp')
        temp.textContent = data.main.feels_like
        weatherEl.appendChild(temp)

}
    //console.log("my results after", user)
    console.log("after fetch")

    
//}
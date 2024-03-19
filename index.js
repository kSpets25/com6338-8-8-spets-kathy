// Your code here

//get weather, form and button elements
//attach fetch call to the button element click
//use https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={currentWeather}
//map needs to be based on location
// "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8907802964041b9d0da4e362e4a9789c"
//input should display not found if location not found.
//render map with (city name h2) (an (a) hyperlink href google map link) (img icon of weather conditions) (
    //p text of current, feels like, and last updated conditions, )
    //append to page.
//create .catch function (err) to catch errors.

var weatherEl = document.getElementById("weather")
var userQuery = document.getElementById("weather-search")
var btn = document.querySelector("button")

var URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="
var weatherDiv = document.getElementById('weather')
var form = document.querySelector('form')

console.log("start")

form.onsubmit = function(e) {
    e.preventDefault()
    var userQuery = this.search.value.trim();
    console.log("this", this)
    //if (!userQuery) {return}
    console.log("this",this)
    const APIKey = "8907802964041b9d0da4e362e4a9789c";
    console.log (URL,userQuery,APIKey)
    fetch(URL + userQuery + "&appid=" + APIKey)

.then (function(res) {
    return res.json()
    console.log("res here")
    console.log("res",res)
})
    .then(function(data) {
        console.log("laterudata",data)
        console.log("main",data.main)
        console.log("weather",data.weather)
        console.log("weather",data.weather[0])
        console.log("weather",data.weather[0].description)
        console.log("weather",data.weather[0].icon)

        var h2 = document.createElement('h2')
        h2.textContent = data.name
        weatherDiv.appendChild(h2)

        var temp = document.createElement('temp')
        temp.textContent = ("Current:  " + data.main.temp + "°")
        weatherDiv.appendChild(temp)

        var temp = document.createElement('temp')
        temp.textContent = ("Feels like:  " + data.main.feels_like + "°")
        weatherDiv.appendChild(temp)

        var weatherDesc = document.createElement('weather-description')
        temp.textContent = data.weather[0].description
        weatherDiv.appendChild(p)

       
        

    })

}
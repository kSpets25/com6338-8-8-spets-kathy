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
    
    const APIKey = "8907802964041b9d0da4e362e4a9789c";
    console.log (URL,userQuery,APIKey)
    fetch(URL + userQuery + "&appid=" + APIKey)

.then (function(res) {
    return res.json()
    console.log("res here")
    console.log("res",res)
})
    .then(function(data) {
        weatherDiv.innerHTML = ""
        form.search.value = ""
        
        console.log("laterudata",data)
        console.log("main",data.main)
        console.log("main",data.main.feels_like)
        console.log("main",data.main.temp)
        console.log("weather",data.weather)
        console.log("weather",data.weather[0].description)
        console.log("weather",data.weather[0])
        console.log("weather",data.weather[0].main)
        console.log("weather",data.weather[0].icon)
        console.log(data.sys.country)

        console.log(weather)

        var h2 = document.createElement('h2')
        h2.textContent = (data.name + ", " + data.sys.country)
        weatherDiv.appendChild(h2)

        var aTag = document.createElement('a');
        aTag.setAttribute('href', "https://www.google.com/maps/search/?api=1&query=" + data.coord.lat + "," + data.coord.lon)
        aTag.textContent = "click to view map";
        //window.open(aTag, "_blank")
        weatherDiv.appendChild(aTag);

        var img = document.createElement('img')
       //img.src = "https://openweathermap.org/img/wn/10d@2x.png"
        img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        console.log("image",img)
        weatherDiv.appendChild(img);

        var weatherMain = document.createElement('p')
        weatherMain.textContent = data.weather[0].description.toUpperCase()
        weatherDiv.appendChild(weatherMain)
        
        var temp = document.createElement('p')
        temp.textContent = ("Current:  " + data.main.temp + "°")
        weatherDiv.appendChild(temp)
        
        var temp2 = document.createElement("p")
        temp2.textContent = ("Feels like: "  + data.main.feels_like + "°")
        weatherDiv.appendChild(temp2)

        


    

       
        

    })

}
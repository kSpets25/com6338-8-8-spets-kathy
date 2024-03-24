
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
    if (res.status !== 200) {
        //weatherDiv.innerHTML = ""
        form.search.value = ""
    throw new Error('Location not found')
    }
    return res.json()
    
})
    .then(function(data) {
        weatherDiv.innerHTML = ""
        form.search.value = ""
        
            //API web Data
        console.log("laterudata",data)
        console.log("main",data.main)
        console.log(data.sys.country)
        console.log("main",data.main.feels_like)
        console.log("main",data.main.temp)
        console.log("weather",data.weather)
        console.log("weather",data.weather[0].description)
        console.log("weather",data.weather[0])
        console.log("weather",data.weather[0].main)
        console.log("weather",data.weather[0].icon)
        console.log("laterudata",data.dt * 1000)

        console.log(weather)

        var h2 = document.createElement('h2')
        h2.textContent = (data.name + ", " + data.sys.country)
        weatherDiv.appendChild(h2)

        var aTag = document.createElement('a');
        aTag.setAttribute('href', "https://www.google.com/maps/search/?api=1&query=" + data.coord.lat + "," + data.coord.lon)
        aTag.textContent = "click to view map";
        weatherDiv.appendChild(aTag);

        var img = document.createElement('img')
            //img.src = "https://openweathermap.org/img/wn/10d@2x.png"
        img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        console.log("image",img)
        weatherDiv.appendChild(img);

        var weatherMain = document.createElement('p')
        weatherMain.textContent = data.weather[0].description.toUpperCase()
        weatherDiv.appendChild(weatherMain)
        
        weatherDiv.appendChild(document.createElement('br'))
        var temp = document.createElement('p')
        temp.textContent = ("Current:  " + data.main.temp + " " + "°F")
        weatherDiv.appendChild(temp)
        
        var temp2 = document.createElement("p")
        temp2.textContent = ("Feels like:  "  + data.main.feels_like + " " + "°F")
        weatherDiv.appendChild(temp2)

        weatherDiv.appendChild(document.createElement('br'))  
        var time = document.createElement('p') 
        var date = new Date(data.dt * 1000)
        console.log('date', date,) 
        var timeString = date.toLocaleTimeString('en-US', {
           hour: 'numeric',
         minute: '2-digit'
        })
        time.textContent = ("Last updated  " + timeString)
        weatherDiv.appendChild(time)
        console.log('timestring', time.timeString)       

    })

    .catch(function(err) {
        weatherDiv.innerHTML = err.message  
        
    })

}
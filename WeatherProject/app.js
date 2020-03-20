// https://httpstatusdogs.com/
// const city = "london"

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express(); 

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res) {
    res.sendFile(__dirname+ "/index.html")
});

app.post("/", function(req, res) {
    
    // console.log(req.body.cityName)
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=3af2dd610889ed72f41025602f7e26a7&units=metric"
    // const city = "Sydney"
    const city = req.body.cityName
    const appKey = "3af2dd610889ed72f41025602f7e26a7"
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appKey + "&units=" + units
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data) {
            // console.log(data);
            const weatherData =  JSON.parse(data)
            // console.log(weatherData)
            temp = weatherData.main.temp

            // console.log(weatherData.main.feels_like)
            wstring1 = "The temperature in " + city + " is " + temp + " Degrees Celcius"
            wstring2 = "The weather is currently - " + weatherData.weather[0].description
            // res.send("<h1>"+ wstring1+"</h1>" + "<h2>" + wstring2+" </h2>")

            const icoUrl = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"

            res.write("<h1>"+ wstring1+"</h1>")
            res.write("<h3>" + wstring2+" </h3>")
            res.write("<img src="+icoUrl+">")
            res.send()
            
        })
    })

})




app.listen(3000,function(req,res) {
    console.log("Server is running on port3000")

});
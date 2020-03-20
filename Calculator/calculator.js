const express = require("express");
const bodyParser = require("body-parser")
const app = express() ;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    // res.send("Hello World");
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    
    console.log(req.body);

    var num1 = Number(req.body.num1) ;
    var num2 = Number(req.body.num2) ;

    var result = num1 + num2; 
    res.send("Result =" + result)
});

app.get("/bmicalculator", function(req, res) {
    // res.send("Hello World");
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res){
    
    console.log(req.body);

    var weight = Number(req.body.weight) ;
    var height = Number(req.body.height) ;

    var bmi = weight /(weight * height); 
    res.send("Result =" + bmi)
});



app.listen(3000, function() {
    console.log("Server started on port 3000")

});
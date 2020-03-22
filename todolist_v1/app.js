//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food" ];
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// app.use("view engine", "ejs");
app.set("view engine", "ejs");

app.get("/", function(req, res){
  // res.send("Hello");

  var today = new Date() ; 
  // var currentDay = today.getDay();
  
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  
  // var day = "" ;
  var day = today.toLocaleDateString("en-US" , options);
  
  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend" ;
  // } else {
  //   day = "Weekday" ; 
  //   // res.sendfile(__dirname + "/weekday.html
  // }

  res.render("list" , {listTitle: day, items: items}) ;


});

app.post("/", function(req,res){
  let item = req.body.newItem

  // console.log(req.body);
  if (req.body.list === "Work") {
    workItems.push(item) 
    res.redirect("/work")

  } else {
    
  }

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", items: workItems})
})

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
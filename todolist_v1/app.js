//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");

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

  let day =date.getDate();

  res.render("list" , {listTitle: day, items: items}) ;


});
``
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

app.get("/about", function(req,res){
  res.render("about.ejs")
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
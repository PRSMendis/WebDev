//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");
items = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const itemsSchema = {
  name: String,
};

const Item = mongoose.model(
  "item",
  itemsSchema
);
const item1 = new Item({
  name: "Welcome to your to do list"
});

const item2 = new Item({
  name: "Hit the + button to add a new item"
});

const item3 = new Item({
  name: "<-- Hit this to delete an item"
});

const groceries = new Item({
  name: "groceries"
});

const defaultItems = [item1, item2, item3];


app.get("/", function (req, res) {
  Item.find(function (err, results) {

    if (results.length ===0 ) {
      // console.log("Empty")
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Succesfully logged the items to DB")
        }
      })
      // results.forEach(entry => {
      //   items.push(entry.name)
      // })
      res.redirect("/")

    } else {
      // console.log(results)
      // console.log(items)
      res.render("list", {
        listTitle: "Today",
        // newListItems: items
        newListItems: results
      });
    }
    // console.log(results.name)
    

  });
});

// app.post("/", function (req, res) {

//   const item = req.body.newItem;

//   if (req.body.list === "Work") {
//     workItems.push(item);
//     res.redirect("/work");
//   } else {
//     items.push(item);
//     res.redirect("/");
//   }
// });

app.post("/", function (req, res) {

  const itemName = req.body.newItem;

  const newItem = new Item({
    name: itemName
  });

  newItem.save();
  res.redirect("/")
});

app.post("/delete", function(req,res){
  const checkedItemId = req.body.checkbox;
  console.log(req.body.checkbox)
  console.log("HEY ID IS " + checkedItemId)
  console.log(Item)

// Item.findByIdAndDelete(checkedItemId, function(err){
//   if (err) {
//   console.log(err)
// } else{
//   console.log("Delted?")
// }
// });

  // Item.findByIdAndRemove(checkedItemId, function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log("Succesfully removed element with ID: " + checkedItemId)
  //   }
  // });
  //  Item.update( 
  //   {_id: checkedItemId}, 
  //   { $pull: {posts: req.body.post_id } } 
  // )
  // .then( err => {
  //   console.log("deletion error")
  // });


});



app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
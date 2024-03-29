//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect("mongodb+srv://admin-rayhan:test123@cluster0-jhblh.mongodb.net/todolistDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articleSchema);
//TODO



///////////////////////////////////Requests Targetting All articles/////////////////////////////////////////////////

app.route("/articles")

.get(function(req, res){
  Article.find(function(err, foundArticles){
    if (!err) {
    // console.log(foundArticles)
    res.send(foundArticles)
    } else {
      res.send(err);
    }

  })
})

.post(function(req,res){
  // console.log(req.body.title)
  // console.log(req.body.content)
  const  newArticle = new Article ({
    title: req.body.title,
    content: req.body.content
  })
  newArticle.save(function(err) {
    if (!err) {
      res.send("Successfully added new article.");
    } else {
      res.send(err);
    }
  })
})

.delete((function(req, res) {
  Article.deleteMany(function(err){
    if (!err) {
      res.send("Succesfully deleted all articles.")
    } else {
      res.send(err)
    }
  })
}));

///////////////////////////////////Requests Targetting Specific Articles/////////////////////////////////////////////////


app.route("/articles/:articleTitle")

.get(function(req,res) {
  Article.findOne({title:req.params.articleTitle}, function(err, foundArticle){
    // if (!err) {
    // // console.log(foundArticles)
    // res.send(foundArticles)
    // } else {
    //   res.send(err);
    // }
    if (foundArticle) {
      // console.log(foundArticles)
      res.send(foundArticle)
      } else {
        // res.send(err);
        res.send("No articles matching that title were found.");
      }

})
})

// .put(function(req,res) {
//   Article.updateMany(
//     {title: req.params.articleTitle},
//     {title: req.body.title, content: req.body.content},
//     {overwrite: true},
//     function(err) {
//       if(!err) {
//         res.send("Succesfully updated Article Title: " + req.body.title + ".")
//       } else{
//         res.send(err)
//       }
//     }
//   )
// })

.patch(function(req,res) {
  Article.updateOne(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err) {
      if(!err) {
        res.send("Succesfully updated Article.")
      } else{
        res.send(err)
      }
    }
  )
})

.delete(function(req,res) {
  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err) {
      if(!err) {
        res.send("Succesfully deleted Article.")
      } else{
        res.send(err)
      }
    }
  )
})




app.listen(3000, function() {
  console.log("Server started on port 3000");
});
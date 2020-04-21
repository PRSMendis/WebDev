//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption")
// const md5 = require("md5")
// const bcrypt = require("bcrypt")
// const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
// const passportLocal = require("passport-local "); 
const passportLocalMongoose = require("passport-local-monogoose");



const app = express();




app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(session({
    secret: "Our little secret.",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

userSchema.plugin(passportLocalMongoose)



// console.log(process.env.secret)

// userSchema.plugin(encrypt, {secret: process.env.secret, encryptedFields: ['password']})

const User = new mongoose.model("User", userSchema)

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get("/", function(req,res) {
    res.render("home");
})


app.route("/login")

.get(
    function(req,res){
        res.render("login");
    }
)

.post(
    function(req,res) {
        

    }
)



app.route("/register")

.get(
    function(req,res){
        res.render("register");
    }
)

.post(
    function(req,res) {
        

    }
)












app.listen(3000, function() {
  console.log("Server started on port 3000");
});

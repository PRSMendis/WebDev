const express = require("express");

const app = express() ;

app.get("/", function(req, res) {
    res.send("<h1>hello</h1>")
    // res.send(req)
});

app.get("/contact", function(req, res) {
    res.send("<h1>Contact me at: rayhan.mendis@gmail.com</h1>")
});

app.get("/about", function(req, res) {
    res.send("<h2>Hi I'm rayhan, I'm a recent graduate of Biomedical and Electrica Engineering</h2>")
});

app.listen(3000, function() {

    console.log("Server started on port 3000")
});

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express(); 

// Create a static folder for css and images etc
app.use(express.static("public"));

// encode data so we can interpret it as humans
app.use(bodyParser.urlencoded({extended:true}));

// set home page - send signup.html
app.get("/", function(req,res) {
    res.sendFile(__dirname+ "/signup.html")
});

// tell the server that we're running on port 3000
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
}) ;

app.post("/failure", function(req,res) {
    res.redirect("/");
});


// reads data from request (client side)
app.post("/", function(req, res) {
    // console.log(response.statusCode)
    var firstname = req.body.fName
    var lastname = req.body.lName
    var em = req.body.email
    console.log(firstname, lastname, em)

    // create data object containing required data for mailchimp
    var data = {
        members: [
            {
                email_address: em,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname,
                }
            }
        ]
    }

    // convert object to json so mailchimp can interpret
    var jsonData = JSON.stringify(data) ;

    // use ids from mailchimp
    // listid refer to 'audience' 
    const listId = "b8d20affbc";
    // access this to get api
    // remember to sub in which us server is required
    const url = "https://us19.api.mailchimp.com/3.0/lists" +"/" + listId;

    // specify which method and authentification is required to submit to mailchimp
    const options = {
        method: "POST",
        auth: "rayhan:0930179a0a40f8de82f57073246ff6ac-us19",   
    }

    // send the json data to server to display
    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname+ "/success.html") ; 
        } else {
            res.sendFile(__dirname+ "/failure.html") ; 
        }


        response.on("data", function(data) {
            // console.log(JSON.parse(data).errors)
            // console.log("yeet");
        })

    });

    console.log(request)


    // SEND IT
    request.write(jsonData) ;
    // STOP SENDING IT
    request.end();
    // console.log(JSON.parse(data).errors)


    // if (JSON.parse(data).errors = [] ) {
    //     console.log("NO ERRORS")
    // } else{
    //     console.log("THERE ARE ERRORS")
    //     console.log(JSON.parse(data).errors)
    // }


});

// API KEY (MAILCHIMP)
// 0930179a0a40f8de82f57073246ff6ac-us19

// LIST ID 
// b8d20affbc 

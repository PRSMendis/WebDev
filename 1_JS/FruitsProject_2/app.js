const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true })
mongoose.connect("mongodb://localhost:27017/People  ", { useNewUrlParser: true, useUnifiedTopology: true })

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", peopleSchema)

const person = new Person ({
    name: "John",
    age: 37,
});

person.save();
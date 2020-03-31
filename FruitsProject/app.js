const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true })
mongoose.connect("mongodb://localhost:27017/People", { useNewUrlParser: true, useUnifiedTopology: true })

const fruitSchema = new mongoose.Schema ({
  name: { 
    type: String,
    required: [true, "you need a name, bro"] ,
    rating: Number
  }
});

const peopleSchema = new mongoose.Schema ({
    name: { 
      type: String,
      required: [true, "you need a name, bro"] } ,
    age: {
      type: Number,
      min:0,
      max: 200
    },
    favFruit: fruitSchema
});



const Fruit = mongoose.model("Fruit", fruitSchema)

const Person = mongoose.model("Person", peopleSchema)

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9
});

pineapple.save();

const caitlin = new Person ({
    name: "Caitlin",
    age: 37,
    favFruit: pineapple

});

caitlin.save();

const steve = new Person ({
  name: "Steve",
  age: 25
})

const yeet = new Person ({
  name: "Yeet",
  age: 25,
});

Person.insertMany([steve, yeet], function(err){
  if (err) {
    console.log(err)
  } else {
    console.log("Succesfully logged the peeps")
  }

})

// person.save();

Person.find(function(err, People){
  if (err) {
    console.log(err)
  } else {
    mongoose.connection.close();
    People.forEach(entry => {
      // console.log(entry["name"])
      // console.log(entry.name)
      console.log(entry)
    });
  }
}) 

Person.updateOne({name: "Steve"}, {favFruit: pineapple}, function(err){
  if (err) {
    console.log(err)
  } else{
    console.log("Successfully updated doc")
  }

})

// Person.deleteOne({name: "Yeet"}, function(err){
//   if (err) {
//     console.log(err)
//   } else{
//     console.log("Successfully deleted entry")
//   }

// })

Person.deleteMany({name: "Yeet"}, function(err){
  if (err) {
    console.log(err)
  } else{
    console.log("Successfully deleted entry")
  }

})





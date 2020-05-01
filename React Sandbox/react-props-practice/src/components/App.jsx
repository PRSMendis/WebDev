import React from "react";
import Card from "./Card.jsx";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      {console.log(Contacts)}
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      {Contacts.forEach(contact => {
        console.log(contact)
      })};

    </div>
  );
}

export default App;

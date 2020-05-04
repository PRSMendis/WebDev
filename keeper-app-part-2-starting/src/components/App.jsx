import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function CreateNotes(props) {
  return (
    <div>
      {console.log(props)}
      <Note key={props.key} title={props.title} content={props.content} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {/* {console.log(notes)} */}
      {/* notes.map() */}
      {/* {notes.map(CreateNotes)} */}
      {notes.map(note => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
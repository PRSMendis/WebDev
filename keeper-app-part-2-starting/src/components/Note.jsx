import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      {console.log(props)}
      <p>{props.content}</p>
    </div>
  );
}

export default Note;

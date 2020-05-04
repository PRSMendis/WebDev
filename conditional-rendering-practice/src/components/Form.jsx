import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {console.log(props)}
      {/* props.registerbool &&  */}
      {!props.registerbool && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* <button type="submit">Register</button> */}
      {props.registerbool ? (
        <button type="submit">Login</button>
      ) : (
        <button type="submit">Register</button>
      )}
    </form>
  );
}

export default Form;

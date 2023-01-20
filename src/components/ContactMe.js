import React from "react";
import { Link } from "react-router-dom";

function ContactMe() {
  return (
    <div>
      <form>
        <label for="yourName">Your Name</label>
        <input type="text" id="yourName"></input>
        <br />
        <label for="yourEmail">Your Email</label>
        <input type="text" id="yourEmail"></input>
        <br />
        <label for="yourMessage">Your Message</label>
        <input type="text" id="yourMessage"></input>
        <br />
      </form>
    </div>
  );
}

export default ContactMe;

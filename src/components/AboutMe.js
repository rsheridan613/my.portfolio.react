import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <div className="about about-copy container" id="about">
        <img
          src="./assets/images/selfie.jpg"
          alt="My only good picture of myself"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          delectus accusamus, maxime iure, nam doloribus ad quasi expedita
          molestias eius sunt labore laudantium iusto voluptates exercitationem,
          veritatis in? Consectetur adipisci quam corrupti ratione ut voluptas
          soluta, iure facere, impedit accusamus omnis pariatur voluptatibus
          numquam id illum quaerat nostrum ipsa nisi!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

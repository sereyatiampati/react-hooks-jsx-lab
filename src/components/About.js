import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I love creating beautiful user interfaces and giving customer a wonderful experience.</p>
    <img src={image}></img>

  </div>
  );
}

export default About;

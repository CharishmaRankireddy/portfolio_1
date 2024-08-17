import React from 'react';
import './About.css'; // Make sure this CSS file exists and is correctly named
import myImage from './images/cherry yellow2.jpg'; // Replace with the path to your image

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-info">
        <h2>About Me</h2>
        <p>I'm Charishma, pursuing a BTech at KIET-W College with a specialization in Artificial Intelligence and Data Science. I am passionate about technology and continuously strive to enhance my skills in this ever-evolving field.</p>
      </div>
      <div className="about-image">
        <img src={myImage} alt="Charishma" />
      </div>
    </section>
  );
};

export default About;

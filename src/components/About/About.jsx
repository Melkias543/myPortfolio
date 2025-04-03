import React from 'react'
import "./about.css"
import { NavbarBrand } from 'react-bootstrap';
import ppt from "../../assets/image/ppt.png"
function About() {
  return (
    <div className="descripion mb-3">
      <div className="image">
        
        <img
          src={ppt}
          className=" img-fluid"
          style={{ height: "600px", objectFit: "contain" }}
          alt="Melkias profile photo"
        />
      </div>
      <div className="bg-container " id="About">
        <span>
          <strong className="background">About Me</strong>
          <br />
        </span>
        <span>
          <p>
            I’m Mellkias Teshoma, a highly motivated Full-Stack Web Developer
            and Computer Science student at Haramaya University. I am passionate
            about turning ideas into functional and visually appealing digital
            experiences. Through hands-on projects, I have built a strong
            foundation in web development, allowing me to create modern,
            efficient, and user-friendly applications. I am detail-oriented and
            dedicated to delivering high-quality work. Whether working
            independently or collaborating in a team, I strive to solve problems
            efficiently and meet project deadlines.
          </p>
          <p>
            I quickly adapt to new technologies and constantly challenge myself
            to improve, ensuring that my skills stay relevant in the
            ever-evolving tech industry. Beyond coding, I value teamwork,
            creativity, and continuous learning. I believe that great software
            is built through collaboration and innovation, and I am always eager
            to contribute to meaningful projects that push my skills to the next
            level.
          </p>
          <p>
            <em>Let’s build something great together!</em>
          </p>
        </span>
      </div>
    </div>
  );
}

export default About

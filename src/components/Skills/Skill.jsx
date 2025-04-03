import React from 'react'
import './skill.css'
import bootstrap from "../../assets/bootstarap.png";
import express from "../../assets/express.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import css from "../../assets/css.jpeg";
import react from "../../assets/react.png";
import jquery from "../../assets/jquery.jpeg";
import { Link } from 'react-router-dom';
import download from '../../assets/image/download.png'
import taiwind from "../../assets/image/taiwind.png";
function Skill() {
return (
  <div className="skill" id="skill">
    <h1>
      <strong>Skills</strong>
      <h3 className=' pt-1'>
        <em>React is my favorite!</em>
      </h3>
    </h1>
    <ul className="d-flex gap-5 p-5 m-5 list-style-none skill-list">
      <li>
        <img src={html} alt="html" />{" "}
      </li>
      <li>
        <img src={css} alt="css" />
      </li>
      <li>
        <img src={bootstrap} alt="bootstrap" />
      </li>
      <li>
        <img src={js} alt="javascript" />
      </li>
      <li>
        <img src={jquery} alt="jquery" />
      </li>
      <li>
        <img src={node} alt="node js" />{" "}
      </li>
      <li>
        <img src={mysql} alt="" />
      </li>
      <li>
        <img src={react} alt="react" />
      </li>
      <li>
        <img src={express} alt="" />
      </li>
      <li>
        <img src={taiwind} alt="" />
      </li>
    </ul>
    <span className="My_cv">
      <Link to="Melkias.udacity.PDF" target="_blank">
        Download My Cv <img src={download} alt="" />{" "}
      </Link>
    </span>
  </div>
);
}

export default Skill

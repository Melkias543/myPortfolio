import React from 'react'
import "./project.css"
import { Link } from 'react-router-dom'
import netflix from "../../assets/image/netflix.png"
import crud from '../../assets/image/crud.png'
import ems from "../../assets/image/ems.png";

function Projects() {
  return (
    <div className="text-center project" id="project">
      <h1>Recent Works</h1>

      <div className="d-flex gap-4 align-items-center images justify-content-cente m-5 project_containar ">
        <Link to="https://github.com/Melkias543/Clone_Netflix">
          <img src={netflix} alt="" target="blank" />
        </Link>
        <Link
          to="https://github.com/Melkias543/Full-Stack-React-Node.js-MySQL"
          target="blank"
        >
          <img src={crud} alt="" />
        </Link>

        <Link
          className="EmployesMS"
          to="https://github.com/Melkias543/Fullstack_employe_management_system"
          target="blank"
        >
          <img src={ems} alt="" />

          <div className=" text-decoration-none Employes_hide justify-content-center align-items-center ">
            <p>
              Role based  <br /> Employes web application
            </p>
          </div>
        </Link>
      </div>

      <div className="github">
        <Link to="https://github.com/Melkias543">
          <h1 class="github-heading">
            Check my GITHUB here <br /> for more!
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Projects

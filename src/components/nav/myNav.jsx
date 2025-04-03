import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";


import "./nav.css";
import logo from "../../assets/image/logo.png";

function MyNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const service = useRef(null);

  const scroll = (elementToref) => {
    window.scroll({
      top: elementToref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <section className="nav">
      <div className="container">
        <div className="d-flex inner_wrapper justify-content-center">
          <div className="logo">
            <li id="logo">
              <Link>
                <img src={logo} alt="" />
              </Link>
            </li>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
          </div>
          <ul className={`header ${menuOpen ? "show-menu" : ""}`}>
            <li>
              <Link onClick={handleLinkClick} to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleLinkClick} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleLinkClick} to="/service">
                Service
              </Link>
            </li>

            <li>
              <Link onClick={handleLinkClick} to="/skill">
                Skill
              </Link>
            </li>
            <li>
              <Link onClick={handleLinkClick} to="/project">
                Project
              </Link>
            </li>
            <li>
              <Link onClick={handleLinkClick} to="/contacts">
                Contact
              </Link>
            </li>
            <li className="up_work">
              <Link onClick={handleLinkClick}>Upwork</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MyNav;

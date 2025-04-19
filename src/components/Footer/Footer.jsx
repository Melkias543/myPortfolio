import React from 'react'
import "./footer.css"
import tg from "../../assets/image/tg.png"
import email from "../../assets/image/email.png"
import linkdin from "../../assets/image/linkdin.png";
import { Link } from 'react-router-dom';
import Contacts from './contacts/Contacts';
function Footer() {
  return (
    <div>
      <div className="footer" id="contacts">
        <div>
          <h2>
            <em>Connect with Me Together, We Can Achieve Excellence.</em>
          </h2>
        </div>
        <div className="contact_wrapper">
          <h1>Contacts</h1>
          <Contacts />
          <div className="contacts">
            <div className="d-flex connections gap-5">
              <a href="mailto:melkiasapo@gmail.com" target="blank">
                <img src={email} alt="email icon" />
              </a>
              <a href="https://t.me/INKU_TECH" target="blank">
                <img src={tg} alt="telegram icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/melkias-teshoma-738069347/?trk=opento_sprofile_details"
                target="blank"
              >
                <img src={linkdin} alt="linkidin icon" />
              </a>
              <span id='tel' to="tel">Call Me: +251 919 779 032</span>
            </div>
            <p> &#169; 2024 Melkias. All rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer

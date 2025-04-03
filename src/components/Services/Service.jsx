import React from 'react'
import "./service.css"
function Service() {
  return (
    <div className="service t-c" ref={Service} id="service">
      <h1>
        
        <strong>What I Offer</strong>
      </h1>
      <div className="WhatIam">
        <p>I'm a great team player, and I enjoy working with others.</p>
        <p> Some of my work qualities are listed below.</p>
      </div>
      <div className="service_wrapper t-c g-5">
        <div>
          <div className="upper  d-flex g-4">
            <div className="innerDiv">
              <h3 className="t-c">Web Development</h3>
              <p>
                I do some research before starting my development to choose the
                right way for the job
              </p>
            </div>
            <div className="innerDiv">
              <h3 className="t-c">Fully responsive website</h3>
              <p>
                I design my websites for every screen size available and I make
                sure it looks great on every device.
              </p>
            </div>
            <div className="innerDiv">
              <h3 className="t-c">Beautiful Code</h3>
              <p>
                Working on projects, I write beautiful and clean codes to make
                them better readable for any partner or client.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom d-flex g-5">
          <div className="innerDiv">
            <h3 className="t-c">On Time</h3>
            <p>Always responsible to complete any given project on time.</p>
          </div>

          <div className="innerDiv">
            <h3 className="t-c">Quick Learner</h3>
            <p>
              I like to learn new things and I have the ability to learn it
              quickly.
            </p>
          </div>
          <div className="innerDiv">
            <h3 className="t-c">Online</h3>
            <p>Easy to reach and happy to help.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service

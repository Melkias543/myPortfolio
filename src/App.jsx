import React from 'react';
import { useState } from 'react'
import MyNav from './components/nav/myNav.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home.jsx';
import Skill from './components/Skills/Skill.jsx';
import Service from './components/Services/Service.jsx';
import Projects from './components/Project/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import { Route, Routes } from 'react-router-dom';
import Contacts from './components/Footer/contacts/Contacts.jsx';


function App() {


  return (
    <>
      <MyNav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skill />
              <Service />
              <Projects />
              
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              <Home />
              <About />
              <Skill />
              <Service />
              <Projects />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/project" element={<Projects />}></Route>
        <Route path="/contacts" element={<Footer />}></Route>
      </Routes>
     
    </>
  );
}

export default App

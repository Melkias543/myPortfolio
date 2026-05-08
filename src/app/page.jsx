"use client";
import About from "@/components/about";
import Contacts from "@/components/contact";
import Experience from "@/components/exprience";
import Footor from "@/components/footer";
import Home from "@/components/home";
import Navabar from "@/components/navabar";
import Project from "@/components/project";
import Skill from "@/components/skill";
import { useChatOpen } from "@/components/ChatContext";
import React from "react";

const Page = () => {
  const { open } = useChatOpen();

  return (
    <div
      className="transition-all duration-300 ease-in-out"
      style={{ marginLeft: open ? "360px" : "0px" }}
    >
      <Navabar />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Contacts />
      <Footor />
    </div>
  );
};

export default Page;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useChatOpen } from "./ChatContext";

const Navbar = () => {
  const { open: chatOpen } = useChatOpen();
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skill" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-0 w-full shadow-md z-50 transition-all duration-300 ease-in-out"
      style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid #fd5900', left: chatOpen ? '360px' : '0px', width: chatOpen ? 'calc(100% - 360px)' : '100%' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold cursor-pointer hover:scale-105 transition-transform duration-300" style={{ color: '#fd5900' }}>
          <Link href="#home">MELKIAS</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`relative text-base font-medium transition-all duration-300 ${
                  active === link.id
                    ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]"
                    : "hover:opacity-80"
                }`}
                style={{ color: active === link.id ? '#fd5900' : '#ffffff' }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl cursor-pointer transition-transform duration-300 hover:scale-110" style={{ color: '#fd5900' }}
        >
          {isOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t shadow-lg animate-slideDown" style={{ backgroundColor: '#0a0a0a', borderColor: '#fd5900' }}>
          <ul className="flex flex-col items-center py-4 space-y-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  onClick={() => {
                    setActive(link.id);
                    setIsOpen(false);
                  }}
                  className={`block text-lg font-medium transition-colors duration-300`}
                  style={{ color: active === link.id ? '#fd5900' : '#ffffff' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-20 border-t border-[#1e1e1e]" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-xl font-extrabold" style={{ color: '#fd5900' }}>MELKIAS</p>
          <p className="text-gray-500 text-sm mt-1">Full-Stack Web Developer</p>
        </div>

        <p className="text-gray-600 text-sm order-last md:order-none">
          &copy; {new Date().getFullYear()} Melkias Teshoma. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/Melkias543", icon: <FaGithub className="w-5 h-5" />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/melkias-teshoma-738069347/", icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn" },
            { href: "mailto:melkiasapo@gmail.com", icon: <FiMail className="w-5 h-5" />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 bg-[#111111] hover:bg-[#1e1e1e]"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

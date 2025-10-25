import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-50 py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-400 text-2xl">
          &copy; 2024 Melkias Teshoma. All rights reserved.
        </p>

        {/* Optional Links or Social Icons */}
        <div className="flex space-x-6">
          <Link
            href="https://github.com/Melkias543"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/melkias-teshoma-738069347/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:melkiasapo@gmail.com"
            className="hover:text-teal-600 transition"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

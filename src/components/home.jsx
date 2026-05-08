import Link from "next/link";
import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center py-16 md:py-24 px-6 md:px-20 scroll-mt-24 bg-transparent"
      id="home"
    >
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white max-w-3xl">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ backgroundColor: '#fd590020', color: '#fd5900', border: '1px solid #fd590040' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>

        <h1
          className="font-extrabold mb-4 leading-tight"
          style={{ color: '#ffffff', fontSize: 'clamp(2rem, 3vw, 3.5rem)' }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: '#fd5900' }}>Melkias Teshoma</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed">
          Full-Stack  Developer — I Turn Ideas Into Web Experiences
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="#projects"
            className="px-7 py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#fd5900' }}
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-7 py-3 font-semibold rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            Contact Me
          </Link>
          <a
            href="/Melkias.Teshoma.resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 font-semibold rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            <HiOutlineDocumentDownload className="w-5 h-5" />
            Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {[
            { href: "https://github.com/Melkias543", icon: <FaGithub className="w-5 h-5" /> },
            { href: "https://www.linkedin.com/in/melkias-teshoma-738069347/", icon: <FaLinkedin className="w-5 h-5" /> },
          ].map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

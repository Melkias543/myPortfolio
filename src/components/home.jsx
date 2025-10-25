import Link from "next/link";
import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Home = () => {
  return (
    <section
      className="relative min-h-[350px] md:min-h-[500px] flex flex-col justify-center items-center py-16 md:py-24 px-6 md:px-20 scroll-mt-24"
      id="home"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm brightness-100"
        style={{ backgroundImage: "url('/image.png')" }}
      ></div>

      {/* Overlay to make content stand out */}
      <div className="relative z-10 text-center text-white max-w-2xl">
        {/* Name */}
        <h1
          className="font-bold text-teal-300 mb-4 whitespace-nowrap"
          style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
        >
          Hi, I’m Melkias Teshoma
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          Full-Stack Web Developer — I Turn Ideas Into Web Experiences
        </p>

        {/* Call to Action */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="#projects"
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-300 hover:text-black transition"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-600 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>

          {/* Resume Button */}
          <a
            href="/Melkias.Teshoma.resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 px-6 py-3 bg-teal-950 text-rose-50 font-medium rounded-lg hover:bg-teal-600 transition"
          >
            <HiOutlineDocumentDownload className="w-5 h-5" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 text-gray-900 min-h-screen flex items-center py-20 sm:py-28 px-4 sm:px-8 md:px-20 relative scroll-mt-24"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-teal-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-28 -right-28 w-72 sm:w-96 h-72 sm:h-96 bg-teal-200 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 relative z-10">
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-start mb-10 md:mb-0">
          <div className="w-60 h-72 sm:w-72 sm:h-80 md:w-[420px] md:h-[520px] overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="/main.png"
              alt="Melkias Teshoma"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600 mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            Hi! I’m <span className="text-teal-600 font-semibold">Melkias</span>
            , a passionate full-stack web developer based in Ethiopia. I
            specialize in building modern web applications using React, Next.js,
            Node.js, MongoDB, and Laravel. I enjoy creating clean, responsive,
            and user-friendly interfaces while ensuring backend efficiency.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            I love learning new technologies, solving challenges, and building
            high-quality projects that make an impact.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50  text-gray-900 min-h-screen flex items-center py-32 px-6 md:px-20 relative scroll-mt-24"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-200 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image - Always on left */}
        <div className="flex-1 flex justify-center md:justify-start  items-center mb-10 md:mb-0">
          <div className="w-80 h-96 md:w-[450px]  md:h-[550px] overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="/main.png"
              alt="Melkias Teshoma"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
            About Me
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Hi! I’m <span className="text-teal-600 font-semibold">Melkias</span>
            a passionate full-stack Web developer based in
            Ethiopia. I specialize in building modern web applications using
            React, Next.js, Node.js, MongoDB, and PHP with Laravel. I enjoy
            creating clean, responsive, and user-friendly interfaces while
            ensuring backend efficiency. I focus on delivering scalable and
            maintainable solutions, and I love exploring new technologies to
            solve real-world problems through code.
           
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I enjoy learning new technologies, solving challenging problems, and
            creating beautiful, high-quality projects that make an impact.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Tech Stacks" },
];

const About = () => {
  return (
    <section
      id="about"
      className="text-white min-h-screen flex items-center py-20 sm:py-28 px-4 sm:px-8 md:px-20 relative scroll-mt-24 bg-transparent"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fd5900' }}>
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#fd5900' }} />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0 relative">
            {/* Decorative ring */}
            <div
              className="absolute -inset-3 rounded-2xl opacity-30 blur-sm"
              style={{ background: 'linear-gradient(135deg, #fd5900, transparent)' }}
            />
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/main.png"
                alt="Melkias Teshoma"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Full-Stack Web Developer
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-4 leading-relaxed">
              Hi! I&apos;m{" "}
              <span className="font-semibold" style={{ color: '#fd5900' }}>Melkias</span>
              , a passionate full-stack developer based in Ethiopia. I specialize in building
              modern web applications using React, Next.js, Node.js, MongoDB, and Laravel —
              creating clean, responsive, and user-friendly experiences.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              I love learning new technologies, solving real-world challenges, and building
              high-quality projects that make an impact.
            </p>

            {/* Stats row */}
            <div className="flex justify-center md:justify-start gap-8 mb-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center md:text-left">
                  <p className="text-3xl font-bold" style={{ color: '#fd5900' }}>{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#fd5900' }}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

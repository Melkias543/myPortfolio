import React from "react";

const experiences = [
  {
    role: "Intern — Backend Developer",
    company: "Kuraz Tech",
    period: "Jul 2025 – Sept 2025",
    description: "Worked on full-stack development projects as Backend Developer to design and implement real-world logic and API design.",
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    period: "2024 – Present",
    description: "Building responsive and modern web applications using in-demand tech stacks.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="text-white py-28 px-6 md:px-20 scroll-mt-24 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fd5900' }}>
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#fd5900' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#2a2a2a]" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 pl-14">
                {/* Dot */}
                <div
                  className="absolute left-[14px] top-6 w-3 h-3 rounded-full border-2 border-[#0a0a0a]"
                  style={{ backgroundColor: '#fd5900' }}
                />

                <div className="flex-1 bg-[#111111] rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full self-start sm:self-auto"
                      style={{ backgroundColor: '#fd590020', color: '#fd5900' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-3" style={{ color: '#fd5900' }}>{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

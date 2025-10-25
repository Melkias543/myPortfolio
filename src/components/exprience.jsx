import React from "react";

const experiences = [
  {
    role: "Intern As Backend Developer",
    company: "Kuraz Tech",
    period: "Jul 2025 - Sept 2025",
  description:
      "Worked on full-stack development projects as Backend Developer to design and implement real-world logic and API design.",
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    period: "2024 - Present",
    description:
      "Building responsive and modern web applications using in-demand tech stacks.",
  },
];
const Experience = () => {
  return (
    <section 
      id="experience"
      className="bg-gray-50 mt-[-100] text-gray-900 py-32 px-6 md:px-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600">
          Experience
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          Here is some of my professional experience and projects I have worked
          on.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-600">{exp.role}</h3>
            <p className="text-gray-500 italic mb-2">
              {exp.company} | {exp.period}
            </p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

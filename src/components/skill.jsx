import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PHP",
  "Laravel",
  "MySQL",
  "jQuery",
  "Bootstrap",
];

const Skill = () => {
  return (
    <section
      id="skill"
      className="bg-gray-50 text-gray-900 py-32 px-6 md:px-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600">
          My Skills
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          Here are some of the technologies I excel at as a Full Stack
          Developer.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-teal-100 text-teal-800 font-medium rounded-full shadow-sm hover:bg-teal-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skill;

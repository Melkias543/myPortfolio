import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"],
  },
];

const Skill = () => {
  return (
    <section id="skill" className="text-white py-28 px-6 md:px-20 scroll-mt-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fd5900' }}>
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Skills</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#fd5900' }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="bg-[#111111] rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: '#fd5900' }} />
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg text-gray-300 bg-[#1e1e1e] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

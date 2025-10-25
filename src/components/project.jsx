import React, { useState } from "react";
import Link from "next/link";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const projects = [
  {
    name: "University Clearance Management System",
    description:
      "A system to automate and manage student clearance processes at Haramaya University using NextJs, TypeScript, Mongo, and Node.js.",
    github:
      "https://github.com/Melkias543/University_Clerance_managemnt_system",
    image: "/clearnce.png",
    techIcon: <SiNextdotjs className="text-black text-2xl mr-2" />,
    techStack: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
    site: null,
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone fetching data from TMDB API, built with React and JavaScript for practicing UI & API integration.",
    github: "https://github.com/Melkias543/Clone_Netflix",
    image: "/netfilx.png",
    techIcon: <FaReact className="text-blue-500 text-2xl mr-2" />,
    techStack: ["React", "JavaScript", "TMDB API", "CSS"],
    site: null,
  },
  {
    name: "Amazon Clone",
    description:
      "An Amazon-like e-commerce site clone built with JavaScript for frontend functionality and product management.",
    github: "https://github.com/Melkias543/Amazon_Clone",
    image: "/amazon.png",
    techIcon: <FaReact className="text-blue-500 text-2xl mr-2" />,
    techStack: ["React", "Firebase", "JavaScript"],
    site: null,
  },
  {
    name: "Evangadi Forum",
    description:
      "A discussion forum platform built with JavaScript for community engagement and topic-based discussions.",
    github: "https://github.com/Melkias543/evangadiForoum",
    image: "/evangadi.png",
    techIcon: <FaReact className="text-blue-500 text-2xl mr-2" />,
    techStack: ["React", "JavaScript", "Node.js", "MySQL", "Express"],
    site: null,
  },
  {
    name: "Employee Management System",
    description:
      "A fullstack employee management system for managing employee data, roles, and access, built with React and Node.js.",
    github: "https://github.com/Melkias543/Fullstack_employe_management_system",
    image: "/employe.png",
    techIcon: <FaReact className="text-blue-500 text-2xl mr-2" />,
    techStack: ["React", "Node.js", "Express", "MySQL", "Bootstrap"],
    site: null,
  },
  {
    name: "Travel Blog App",
    description:
      "A full-featured travel blog platform with Blade templates and Laravel backend for content management.",
    github: "https://github.com/Melkias543/Travel_Blog_app",
    image: "/travel.png",
    techIcon: null,
    techStack: ["Laravel", "Blade", "PHP", "MySQL"],
    site: null,
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/Melkias543/myPortfolio",
    image: "/portifoli.png",
    techIcon: <SiNextdotjs className="text-black text-2xl mr-2" />,
    techStack: ["Next.js", "Tailwind CSS"],
    site: null,
  },
];

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () =>
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));

  const handleShowLess = () => setVisibleCount(3);

  return (
    <section className="py-12 px-4 md:px-16 bg-gray-50" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-950">
        <span className="text-indigo-600">Featured</span> Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, visibleCount).map((project, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}

            <div className="flex items-center mb-3">
              {project.techIcon}
              <h3 className="text-xl font-semibold text-teal-950">
                {project.name}
              </h3>
            </div>

            <p className="text-gray-600 flex-1 mb-4">{project.description}</p>

            {/* Tech Stack badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack &&
                project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-2 py-1 bg-teal-100 text-teal-800 rounded hover:bg-teal-200 transition cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            {/* GitHub + Demo Links */}
            <div className="flex gap-2 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>

              {project.site && (
                <Link
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white bg-amber-700 hover:bg-amber-500 px-4 py-2 rounded transition"
                >
                  Demo Site
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {visibleCount < projects.length ? (
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-500 transition"
          >
            Show More
          </button>
        ) : projects.length > 3 ? (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-500 transition"
          >
            Show Less
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Project;

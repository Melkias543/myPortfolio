import React, { useState } from "react";
import Link from "next/link";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
// https://github.com/Melkias543/Language_translater_for_healthcare_som_and_am
const projects = [

  
{
  name: "Healthcare Translator",
    description: "A healthcare translation system that enables seamless communication between healthcare providers and patients speaking different languages, with support for Amharic and Afan Somali. It features real-time speech recognition, text-to-speech, and medical-term-aware translation, along with a Flutter mobile app, web dashboard, and REST API for integration.",
    github: "https://github.com/Melkias543/Language_translater_for_healthcare_som_and_am",
    image: "lang_translater.png",
    techIcon:null,
    techStack: ["Python", "Flutter", "MongoDB",   "NLLB (No Language Left Behind)","Whisper (Speech Recognition)","Text-to-Speech (TTS)"],
    site:null,
  },


{
  name: "Toxido Man Suit",
    description: "Developed “Toksido Suit,” a full-stack e-advertising platform for a private client in Harar using Next.js, TypeScript, Node.js, and MongoDB, enabling a seamless and scalable advertisement management experience.",
    github: "https://github.com/Melkias543/toksido-suit/",
    image: "/toksido.png",
    techIcon: null,
    techStack: ["Next.js", "TypeScript", "MongoDB", "Node.js","Tailwind CSS","Express"],
    site: null,
  },


  {
  name: "Debter Link – School Ecosystem Platform",
  description: "A full-stack digital ecosystem designed to connect and streamline interactions across schools, including students, teachers, and administrators. The platform centralizes communication, data management, and service access, improving efficiency and collaboration within the education system.",
  github: "https://github.com/Melkias543/debter_link_connect_all_school_ecosystem",
  image: "/dabter_link.png",
  techIcon: null,
  techStack: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS"
  ],
  site: null,
},

{
     name: "University Non-Cafeteria Meal Management System",
    description: "A web-based system designed to manage and streamline meal services for university students who do not use cafeteria facilities and use Local caffe by contract.",
    github: "https://github.com/Melkias543/university_non_cafeteria_meal_system",
    image: "/university_non_meal.png",
    techIcon: null,
    techStack: ["React.js", "TypeScript", "MYSQL", "PHP","Tailwind CSS","Laravel"],
    site: "https://university-non-cafeteria-meal-syste.vercel.app/",
  },


  {
    name: "University Clearance System",
    description: "Automates student clearance processes at Haramaya University using Next.js, TypeScript, MongoDB, and Node.js.",
    github: "https://github.com/Melkias543/University_Clerance_managemnt_system",
    image: "/clearnce.png",
    techIcon: null,
    techStack: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
    site: null,
  },
  {
    name: "Netflix Clone",
    description: "Netflix clone fetching data from TMDB API, built with React and JavaScript for UI & API integration practice.",
    github: "https://github.com/Melkias543/Clone_Netflix",
    image: "/netfilx.png",
    techIcon: null,
    techStack: ["React", "JavaScript", "TMDB API", "CSS"],
    site: null,
  },
  {
    name: "Amazon Clone",
    description: "Amazon-like e-commerce site clone built with JavaScript for frontend functionality and product management.",
    github: "https://github.com/Melkias543/Amazon_Clone",
    image: "/amazon.png",
    techIcon: null,
    techStack: ["React", "Firebase", "JavaScript"],
    site: null,
  },
  {
    name: "Evangadi Forum",
    description: "Discussion forum platform built for community engagement and topic-based discussions.",
    github: "https://github.com/Melkias543/evangadiForoum",
    image: "/evangadi.png",
    techIcon: null,
    techStack: ["React", "JavaScript", "Node.js", "MySQL", "Express"],
    site: null,
  },
  {
    name: "Employee Management System",
    description: "Fullstack system for managing employee data, roles, and access built with React and Node.js.",
    github: "https://github.com/Melkias543/Fullstack_employe_management_system",
    image: "/employe.png",
    techIcon:null,
    techStack: ["React", "Node.js", "Express", "MySQL", "Bootstrap"],
    site: null,
  },
  {
    name: "Travel Blog App",
    description: "Full-featured travel blog platform with Blade templates and Laravel backend for content management.",
    github: "https://github.com/Melkias543/Travel_Blog_app",
    image: "/travel.png",
    techIcon: null,
    techStack: ["Laravel", "Blade", "PHP", "MySQL"],
    site: null,
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    github: "https://github.com/Melkias543/myPortfolio",
    image: "/portifoli.png",
    techIcon: null,
    techStack: ["Next.js", "Tailwind CSS"],
    site: null,
  },
];

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="py-28 px-4 md:px-16 bg-transparent" id="projects">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fd5900' }}>
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#fd5900' }} />
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, visibleCount).map((project, idx) => (
          <div
            key={idx}
            className="group bg-[#111111] rounded-2xl overflow-hidden shadow-xl flex flex-col hover:-translate-y-1 transition-transform duration-300"
          >
            {project.image && (
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
              </div>
            )}

            <div className="p-5 flex flex-col flex-1">
              {/* <div className="flex items-center gap-2 mb-2">
              {project.techIcon ?? project.name?.charAt(0)}
                  <h3 className="text-base font-semibold text-white leading-tight">{project.name}</h3>
              </div> */}
<div className="flex items-center gap-2 mb-2">
  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1e1e1e] text-white font-bold">
    {project.techIcon ? project.techIcon : project.name?.charAt(0)}
  </div>

  <h3 className="text-base font-semibold text-white leading-tight">
    {project.name}
  </h3>
</div>
              <p className="text-gray-400 text-sm flex-1 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-[#1e1e1e] text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto pt-2 border-t border-[#1e1e1e]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#fd5900' }}
                >
                  <FaGithub className="w-4 h-4" /> GitHub
                </a>
                {project.site && (
                  <Link
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-300 px-4 py-2 rounded-lg bg-[#1e1e1e] hover:text-white transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" /> Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        {visibleCount < projects.length ? (
          <button
            onClick={() => setVisibleCount((p) => Math.min(p + 3, projects.length))}
            className="px-8 py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#fd5900' }}
          >
            Show More
          </button>
        ) : projects.length > 3 ? (
          <button
            onClick={() => setVisibleCount(3)}
            className="px-8 py-3 text-white font-semibold rounded-lg bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors"
          >
            Show Less
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Project;

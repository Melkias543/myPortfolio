import React from "react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and modern user interfaces with React, Next.js, and Tailwind CSS.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description:
      "Creating robust APIs and server-side logic with Node.js, Express, and databases.",
    icon: "⚙️",
  },
  {
    title: "Full Stack Solutions",
    description:
      "End-to-end web applications combining frontend, backend, and database design.",
    icon: "🌐",
  },
  {
    title: "Deployment & Optimization",
    description:
      "Deploying apps on Vercel, Netlify, or other cloud services with performance optimization.",
    icon: "🚀",
  },
];

const Service = () => {
  return (
    <section
      id="service"
      className="bg-gray-50 text-gray-900 py-32 px-6 md:px-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600">
          My Services
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          I offer a wide range of web development services to help bring your
          ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;

import React from "react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and modern user interfaces with React, Next.js, and Tailwind CSS.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description: "Creating robust APIs and server-side logic with Node.js, Express, and databases.",
    icon: "⚙️",
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end web applications combining frontend, backend, and database design.",
    icon: "🌐",
  },
  {
    title: "Deployment & Optimization",
    description: "Deploying apps on Vercel, Netlify, or other cloud services with performance optimization.",
    icon: "🚀",
  },
];

const Service = () => {
  return (
    <section id="service" className="text-white py-28 px-6 md:px-20 scroll-mt-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fd5900' }}>
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Services</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#fd5900' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#111111] rounded-2xl p-6 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: '#fd590015' }}
              >
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

"use client";
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("access_key", "c830f95a-9b67-4a7d-a6d2-02b16ea213a8");
    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
    const res = await response.json();
    if (res.success) {
      setResult("✓ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResult(res.message || "Something went wrong!");
    }
  };

  const inputClass =
    "w-full bg-[#111111] text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-200 border border-[#2a2a2a] focus:border-transparent";

  return (
    <section id="contact" className="text-white py-28 px-6 md:px-20 scroll-mt-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#fd5900' }}>
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#fd5900' }} />
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form — takes 3 cols */}
          <div className="md:col-span-3 bg-[#111111] rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className={inputClass}
                  style={{ "--tw-ring-color": "#fd5900" }}
                />
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className={inputClass}
                  style={{ "--tw-ring-color": "#fd5900" }}
                />
              </div>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Your Message"
                rows={6}
                className={`${inputClass} resize-none`}
                style={{ "--tw-ring-color": "#fd5900" }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-3 px-8 rounded-lg font-semibold text-white transition-opacity duration-200 hover:opacity-90 self-start"
                style={{ backgroundColor: '#fd5900' }}
              >
                <FiSend className="w-4 h-4" />
                Send Message
              </button>
              {result && (
                <p className="text-sm font-medium" style={{ color: result.startsWith("✓") ? "#4ade80" : "#fd5900" }}>
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* Info — takes 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {[
              { icon: <FiMail className="w-5 h-5" />, label: "Email", value: "milkyinku@gmail.com" },
              { icon: <FiPhone className="w-5 h-5" />, label: "Phone", value: "+251 919 779 032" },
              { icon: <FiMapPin className="w-5 h-5" />, label: "Location", value: "Haramaya, Addis Ababa, Ethiopia" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="bg-[#111111] rounded-2xl p-6 flex items-start gap-4 shadow-xl">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: '#fd590022', color: '#fd5900' }}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="bg-[#111111] rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for work</span>
              </div>
              <p className="text-gray-400 text-sm">Open to freelance projects and full-time opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

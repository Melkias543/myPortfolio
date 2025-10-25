"use client";
import React, { useState } from "react";
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {

setFormData((formData) => ({
  ...formData,
  [e.target.name]: e.target.value,
}));  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    
    
   const  data = new FormData()
   
    console.log(data);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("access_key", "c830f95a-9b67-4a7d-a6d2-02b16ea213a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const res = await response.json();

    if (res.success) {
      setResult(" Submitted Successfully");
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.log("Error", res);
      setResult(res.message || "Something went wrong!");
    }
  };
  return (
    <section
      id="contact"
      className="bg-gray-50 mt-[-100] text-gray-900 py-32 px-6 md:px-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600">
          Contact Me
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          Feel free to reach out for collaborations or just to say hi!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-teal-600 mb-6">
            Send a Message
          </h3>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
            >
              Send Message
            </button>
            <p className="mt-6 text-center text-teal-300 ">{result}</p>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-teal-600 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> milkyinku@gmail.com
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +251 919 779 032
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> Haramaya,Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

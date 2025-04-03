import React, { useState } from "react";
import "./contact.css";

function Contacts() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  // console.log(inputs)  //// To see value

  const handleSubmit = (e) => {
    // e.preventDefault();  //// Prevents default form submission
    console.log("Form submitted with data:", inputs);
    alert("You have sent your message successfully.");
  };

  return (
    <div>
      <form
        className="form"
        action="https://formspree.io/f/mpwpplqj"
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="d-flex inputs gap-4">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            name="username"
            value={inputs.username}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
          />
        </div>
        <textarea
          name="message"
          onChange={handleChange}
          placeholder="Write here your Message"
          value={inputs.message}
        ></textarea>
        <button type="submit">Submit now</button>
      </form>
    </div>
  );
}

export default Contacts;

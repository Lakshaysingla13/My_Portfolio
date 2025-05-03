import React, { useState } from "react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xrbekjdy", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Thank you for reaching out! We'll get back to you soon.");
        form.reset();
      } else {
        setFormStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-400 py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">Your Message</label>
              <textarea
                name="message"
                required
                className="w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p className="mt-4 text-center text-sm text-blue-400">{formStatus}</p>
          )}
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/lakshaysingla13?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="/logos/instagram.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://twitter.com/LAKSHAY35365923?t=W195l4vno-p34fzgMmRLpw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="/logos/twitter.png"
                alt="Twitter"
                className="w-10 h-10"
              />
            </a>
            <a
              href="mailto:lavisingla13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src="/logos/email.png" alt="Email" className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshay-singla-17644826b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="/logos/linkedin.png"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://github.com/Lakshaysingla13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src="/logos/github.png" alt="GitHub" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

  
      {/* Contact Section
      <section id="contact" className="py-16 px-8 grid md:grid-cols-2 gap-8">
  {/* Social Media Links 
  <div className="space-y-6 text-center md:text-left">
    <h2 className="text-2xl font-bold text-teal-400 mb-4">Follow Me</h2>
    <div className="space-y-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4"
      >
        <img 
          src="/logos/instagram.png"
          alt="Instagram"
          className="w-8 h-8 object-contain"
        />
        <span className="text-gray-300 hover:text-white transition">
          Instagram
        </span>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4"
      >
        <img
          src="/logos/twitter.png"
          alt="Twitter"
          className="w-8 h-8 object-contain"
        />
        <span className="text-gray-300 hover:text-white transition">
          Twitter
        </span>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4"
      >
        <img
          src="/logos/linkedin.png"
          alt="LinkedIn"
          className="w-8 h-8 object-contain"
        />
        <span className="text-gray-300 hover:text-white transition">
          LinkedIn
        </span>
      </a>
      <a
        href="mailto:your_email@example.com"
        className="flex items-center space-x-4"
      >
        <img
          src="/logos/email.png"
          alt="Email"
          className="w-8 h-8 object-contain"
        />
        <span className="text-gray-300 hover:text-white transition">
          Email
        </span>
      </a>
    </div>
  </div> */

  /* Contact Form 
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-6">
    <h2 className="text-2xl font-bold text-teal-400">Get in Touch</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section> */}
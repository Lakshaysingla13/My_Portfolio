import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Mission Statement */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Your Brand</h2>
          <p className="text-sm">
            Bridging technology and innovation to transform ideas into reality. 
            Stay connected and join us on this journey to excellence.
          </p>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Interactive Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition"
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="hover:text-white transition"
              >
                Upcoming Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p>
            <span className="block">Email: lavisingla13@gmail.com</span>
            <span className="block">Phone: +91 7814854285</span>
          </p>
          <p>
            <span className="block">Address: Street No.2, Sekha Road, Barnala, Punjab, India</span>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

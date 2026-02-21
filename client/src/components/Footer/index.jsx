import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          {/* <img
            src="../images/AVSI_LOGO.png"
            alt="Logo"
            className="w-36 object-contain"
          /> */}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm mb-10">
          <a href="/" className="hover:text-indigo-700 transition">
            Home
          </a>
          <a href="/about" className="hover:text-indigo-700 transition">
            About
          </a>
          <a href="/blog" className="hover:text-indigo-700 transition">
            Blog
          </a>
          <a href="/contact" className="hover:text-indigo-700 transition">
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Prizor. All rights reserved.</p>

          <div className="flex gap-6">
           
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

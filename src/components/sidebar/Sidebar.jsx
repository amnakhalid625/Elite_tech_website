import React from 'react'

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
      <div className="flex items-center justify-center p-4 bg-blue-700">
        <h2 className="text-xl font-semibold">Elite Tech</h2>
      </div>

      <nav className="flex flex-col space-y-4 p-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About Us</Link>
        <Link to="/services" className="hover:text-gray-400">Services</Link>
        <Link to="/case-studies" className="hover:text-gray-400">Case Studies</Link>
        <Link to="/blog" className="hover:text-gray-400">Blog</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
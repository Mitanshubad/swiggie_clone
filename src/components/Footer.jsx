import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold mb-2">Connect with Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaInstagram />
            </a>
          </div>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Menu</a>
          <a href="#" className="text-gray-300 hover:text-white">About Us</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
        </nav>
      </div>
      <div className="mt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Food Ordering App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

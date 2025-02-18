import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600">Tripe</div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600">Home</a>
          <a href="#location" className="text-gray-600">Location</a>
          <a href="#explore" className="text-gray-600">Explore</a>
          <a href="#services" className="text-gray-600">Services</a>
          <a href="/contact" className="text-gray-600">Contact Us</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign up</button>
      </nav>

      {/* Contact Us Section */}
      <div className="max-w-4xl mx-auto my-16 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600">Contact Us</h2>
        <p className="text-gray-600 text-center my-4">Feel free to reach out to us for any queries or support.</p>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">Send Message</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <div className="flex justify-center space-x-4 mb-4">
          <FaFacebookF className="text-xl cursor-pointer" />
          <FaTwitter className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <FaYoutube className="text-xl cursor-pointer" />
        </div>
        <p>&copy; {new Date().getFullYear()} Tripe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image3 from "./path-to-your-image.jpg"; // Update with your image path

const TravelPage = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto animate-slide-down">
        <div className="text-2xl font-bold text-blue-600">Tripe</div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Home</a>
          <a href="#" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Location</a>
          <a href="#" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Contact Us</a>
          <a href="#" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Services</a>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110">
          Sign Up
        </button>
      </nav>

      {/* Footer CTA */}
      <div className="max-w-5xl mx-auto px-1 my-12">
        <div className="relative rounded-lg overflow-hidden">
          <img src={Image3} alt="Tropical water" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-400">
                We are a travel agency dedicated to providing unforgettable experiences around the world.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Location</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Services</a></li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><FaYoutube /></a>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest offers, travel tips, and promotions.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-l-lg text-gray-700"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Praveen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelPage;

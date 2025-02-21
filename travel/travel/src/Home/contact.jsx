import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between p-4 max-w-7xl mx-auto"
      >
        <div className="text-2xl font-bold text-blue-600">Tripe</div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#location" className="text-gray-600 hover:text-blue-600 transition">Location</a>
          <a href="#explore" className="text-gray-600 hover:text-blue-600 transition">Explore</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact Us</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign up
        </button>
      </motion.nav>

      {/* Contact Us Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto my-16 p-6 rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/c1.jpeg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        <div className="relative z-10 text-white">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="text-gray-200 text-center my-4">Feel free to reach out to us for any queries or support.</p>
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 space-y-4"
          >
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
            />
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32 bg-white text-black"
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 text-white text-center p-6 mt-10"
      >
        <div className="flex justify-center space-x-4 mb-4">
          <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500 transition" />
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-400 transition" />
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition" />
          <FaYoutube className="text-xl cursor-pointer hover:text-red-500 transition" />
        </div>
        <p>&copy; {new Date().getFullYear()} Tripe. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default ContactUs;

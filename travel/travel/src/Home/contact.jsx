import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactList, setContactList] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track whether we're editing
  const [editContactId, setEditContactId] = useState(null); // Track the contact being edited

  // Fetch data on component mount
  useEffect(() => {
    fetch("http://localhost:8080/contacts") // Corrected endpoint URL
      .then((response) => response.json())
      .then((data) => setContactList(data)) // Store the fetched data in contactList
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (for new contact and editing an existing one)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing contact
      fetch(`http://localhost:8080/contact/${editContactId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Updated:", data);
          setIsEditing(false);
          setEditContactId(null);
          setFormData({ name: "", email: "", message: "" });
          fetchContacts();
        })
        .catch((error) => console.error("Error updating contact:", error));
    } else {
      // Add new contact
      fetch("http://localhost:8080/addContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Added:", data);
          setFormData({ name: "", email: "", message: "" });
          fetchContacts();
        })
        .catch((error) => console.error("Error adding contact:", error));
    }
  };

  // Fetch the contact list again after any change
  const fetchContacts = () => {
    fetch("http://localhost:8080/contacts")
      .then((response) => response.json())
      .then((data) => setContactList(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Handle edit contact
  const handleEdit = (contact) => {
    setIsEditing(true);
    setEditContactId(contact.id);
    setFormData({
      name: contact.name,
      email: contact.email,
      message: contact.message,
    });
  };

  // Handle delete contact
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/contact/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted:", data);
        fetchContacts();
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

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
          <a href="/" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#location" className="text-gray-600 hover:text-blue-600 transition">
            Location
          </a>
          <a href="#explore" className="text-gray-600 hover:text-blue-600 transition">
            Explore
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition">
            Services
          </a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">
            Contact Us
          </a>
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
          <p className="text-gray-200 text-center my-4">
            Feel free to reach out to us for any queries or support.
          </p>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32 bg-white text-black"
              required
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              {isEditing ? "Update Message" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Contact Data Table */}
      <div className="max-w-7xl mx-auto my-8">
        <h3 className="text-2xl font-semibold text-center mb-4">Contact Messages</h3>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Message</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((contact, index) => (
              <tr key={index}>
                <td className="border p-2">{contact.name}</td>
                <td className="border p-2">{contact.email}</td>
                <td className="border p-2">{contact.message}</td>
                <td className="border p-2 space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
                    onClick={() => handleEdit(contact)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

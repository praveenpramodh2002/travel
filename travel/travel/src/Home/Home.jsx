import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { Compass, Hotel, Plane, Camera, Map, Utensils } from 'lucide-react';
import Image1 from "../assets/travel1.jpeg";
import Image2 from "../assets/travel2.jpeg";
import Image3 from "../assets/travel3.jpeg";
import Image4 from "../assets/travel4.jpeg";
import Image5 from "../assets/travel5.jpeg";
import Image6 from "../assets/travel6.jpeg";
import Image7 from "../assets/travel7.jpeg";
import travelVideo from "../assets/video.mp4";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600">Tripe</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">Travel</a>
          <a href="#" className="text-gray-600">Explore</a>
          <a href="#" className="text-gray-600">Activity</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign up</button>
      </nav>

      {/* Hero Section with Video */}
      <div className="relative">
        <div className="h-[400px] min-h-[400px] rounded-lg mx-4 my-6 overflow-hidden relative">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={travelVideo} type="video/mp4" />
            <source src={travelVideo} type="video/webm" />
            <source src={travelVideo} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              Explore the whole world<br />and enjoy its beauty
            </h1>
            <p className="text-lg mb-8">
              Plan and write about your experiences around the world
            </p>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-gray-700 text-sm mb-2">Journey</label>
                <div className="flex items-center">
                  <MapPin className="text-gray-400 mr-2" size={20} />
                  <input type="text" placeholder="Where to?" className="w-full text-gray-700" />
                </div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-gray-700 text-sm mb-2">Date</label>
                <input type="date" className="w-full text-gray-700" />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg self-end">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Best Places Section */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <h2 className="text-2xl font-bold mb-6">Get People to the Best Places</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg flex items-center">
              <div className="mr-6">
                <img src={Image5} alt="Mountain landscape" className="w-32 h-32 rounded-lg" />
              </div>
              <div>
                <h3 className="font-bold mb-2">A Journey to the Peaks</h3>
                <p className="text-gray-600">Explore breathtaking mountains and pristine landscapes for those seeking adventure.</p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg flex items-center">
              <div className="mr-6">
                <img src={Image6} alt="Tropical beach" className="w-32 h-32 rounded-lg" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Relax on a Tropical Beach</h3>
                <p className="text-gray-600">Indulge in the serenity of tropical beaches, perfect for unwinding and exploring.</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="col-span-2">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Sweet Memories Section */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <h2 className="text-2xl font-bold mb-6">Travel to make sweet memories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Find trips that fit your freedom</h3>
              <p className="text-gray-600">Discover your next adventure with our curated selection of destinations.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Get back to nature by travel</h3>
              <p className="text-gray-600">Experience the beauty of natural wonders around the world.</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Tell me more
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={Image5} alt="Mountain landscape" className="w-full h-48 object-cover rounded-lg" />
            <img src={Image6} alt="Beach sunset" className="w-full h-48 object-cover rounded-lg" />
            <img src={Image7} alt="Forest trail" className="w-full h-48 object-cover rounded-lg" />
            <img src={Image4} alt="City skyline" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </div>
{/* Travel Locations Section */}
<div className="max-w-7xl mx-auto px-4 my-12">
  <h2 className="text-2xl font-bold mb-6 text-center">Top Travel Locations</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { img: Image1, title: "Santorini, Greece", desc: "Enjoy stunning sunsets, white-washed buildings, and breathtaking sea views." },
      { img: Image2, title: "Kyoto, Japan", desc: "Experience the serenity of temples, cherry blossoms, and traditional culture." },
      { img: Image3, title: "Bali, Indonesia", desc: "Immerse yourself in tropical paradise with pristine beaches and vibrant culture." },
      { img: Image4, title: "Paris, France", desc: "Explore the City of Love, with its iconic Eiffel Tower and charming cafes." },
      { img: Image5, title: "Maui, Hawaii", desc: "A tropical paradise with breathtaking beaches and volcanic landscapes." },
      { img: Image6, title: "Dubai, UAE", desc: "A futuristic city known for luxury shopping, ultramodern architecture, and vibrant nightlife." }
    ].map((location, index) => (
      <motion.div 
        key={index} 
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={location.img} alt={location.title} className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">{location.title}</h3>
        <p className="text-gray-600">{location.desc}</p>
        <motion.button 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`View details about ${location.title}`}
        >
          View Details
        </motion.button>
      </motion.div>
    ))}
  </div>
</div>
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of travel services designed to make your journey memorable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flight Booking</h3>
              <p className="text-gray-600">Find the best deals on flights to your dream destinations worldwide.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                <Hotel className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hotel Reservations</h3>
              <p className="text-gray-600">Book comfortable stays at carefully selected hotels and resorts.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                <Compass className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tour Packages</h3>
              <p className="text-gray-600">Explore curated tour packages for unforgettable experiences.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Photography Tours</h3>
              <p className="text-gray-600">Capture stunning moments with our specialized photography tours.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                <Map className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adventure Trips</h3>
              <p className="text-gray-600">Experience thrilling adventures in nature's most beautiful locations.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Culinary Tours</h3>
              <p className="text-gray-600">Taste local cuisines and explore food cultures around the world.</p>
            </div>
          </div>
        </div>
        
      </div>
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
          We are a travel agency dedicated to providing unforgettable experiences around the world. From beautiful landscapes to adventurous activities, we curate the best destinations for you.
        </p>
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-500">Travel</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-500">Explore</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-500">Activity</a></li>
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
        <p className="text-gray-400 mb-4">
          Stay updated with our latest offers, travel tips, and exclusive promotions. Sign up for our newsletter.
        </p>
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
      <p>&copy; 2025 Tripe. All rights reserved.</p>
    </div>
  </div>
</footer>



    </div>
  );
};

export default Home;
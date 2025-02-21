import React, { useState, useRef } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { Compass, Hotel, Plane, Camera, Map, Utensils } from 'lucide-react';
import Image1 from "../assets/travel1.jpeg";
import Image2 from "../assets/travel2.jpeg";
import Image3 from "../assets/travel3.jpeg";
import Image4 from "../assets/travel4.jpeg";
import Image5 from "../assets/travel5.jpeg";
import Image6 from "../assets/travel6.jpeg";
import Image7 from "../assets/travel7.jpeg";
import Image8 from "../assets/bali.jpeg";
import Image9 from "../assets/france.jpeg";
import Image10 from "../assets/Greece.jpeg";
import Image11 from "../assets/kytoto.jpeg";
import Image12 from "../assets/hawai.jpeg";
import Image13 from "../assets/uae.jpeg";
import Image14 from "../assets/l1.jpeg";

import travelVideo from "../assets/video.mp4";
import backgroundMusic from "../assets/Luke-Bergs-Waesto-Melody-chosic.com_.mp3";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Music */}
      <audio ref={audioRef} src={backgroundMusic} loop />
      <div className="fixed bottom-5 left-5 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
        <button onClick={togglePlay} className="text-blue-600 text-xl">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={changeVolume} 
          className="w-24"
        />
        <FaVolumeUp className="text-blue-600" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto animate-slide-down">
        <div className="text-2xl font-bold text-blue-600">Tripe</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Home</a>
          <a href="#" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Location</a>
          <a href="/c" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Contact Us</a>
          <a href="#" className="text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-105">Services</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110">
          Sign Up
        </button>
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

      {/* Travel Locations Section */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Travel Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
              img: Image10, title: "Santorini, Greece", desc: "Enjoy stunning sunsets, white-washed buildings, and breathtaking sea views." },
            {
              img: Image11, title: "Kyoto, Japan", desc: "Experience the serenity of temples, cherry blossoms, and traditional culture." },
            {
              img: Image8, title: "Bali, Indonesia", desc: "Immerse yourself in tropical paradise with pristine beaches and vibrant culture." },
            {
              img: Image9, title: "Paris, France", desc: "Explore the City of Love, with its iconic Eiffel Tower and charming cafes." },
            {
              img: Image12, title: "Maui, Hawaii", desc: "A tropical paradise with breathtaking beaches and volcanic landscapes." },
            {
              img: Image13, title: "Dubai, UAE", desc: "A futuristic city known for luxury shopping, ultramodern architecture, and vibrant nightlife." }
          ].map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={location.img} alt={location.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{location.title}</h3>
                <p className="text-gray-600">{location.desc}</p>
              </div>
            </div>
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
        {/* Map Section */}
<div className="max-w-7xl mx-auto px-4 my-12">
  <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Locations on the Map</h2>
  <MapContainer center={[51.505, -0.09]} zoom={3} className="w-full h-96 rounded-lg shadow-lg">
    <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
    />
    
    {/* Markers for Locations */}
    <Marker position={[51.505, -0.09]}>
      <Popup>
        London, UK
      </Popup>
    </Marker>
    <Marker position={[48.8566, 2.3522]}>
      <Popup>
        Paris, France
      </Popup>
    </Marker>
    <Marker position={[40.7128, -74.0060]}>
      <Popup>
        New York, USA
      </Popup>
    </Marker>
    <Marker position={[34.0522, -118.2437]}>
      <Popup>
        Los Angeles, USA
      </Popup>
    </Marker>
    <Marker position={[35.6762, 139.6503]}>
      <Popup>
        Tokyo, Japan
      </Popup>
    </Marker>
    <Marker position={[48.2082, 16.3738]}>
      <Popup>
        Vienna, Austria
      </Popup>
    </Marker>
    <Marker position={[52.3676, 4.9041]}>
      <Popup>
        Amsterdam, Netherlands
      </Popup>
    </Marker>
    <Marker position={[41.9028, 12.4964]}>
      <Popup>
        Rome, Italy
      </Popup>
    </Marker>
    <Marker position={[51.5074, -0.1278]}>
      <Popup>
        London, UK
      </Popup>
    </Marker>
  </MapContainer>
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
      <p>&copy; 2025 Praveen. All rights reserved.</p>
    </div>
  </div>
</footer>



    </div>
    
  );
};

export default Home;

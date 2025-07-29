import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { Compass, Hotel, Plane, Camera, Map, Utensils } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your images (replace with your actual image paths)
import travelVideo from "../assets/video.mp4";
import backgroundMusic from "../assets/Luke-Bergs-Waesto-Melody-chosic.com_.mp3";
import Image5 from "../assets/travel5.jpeg";
import Image6 from "../assets/travel6.jpeg";
import Image8 from "../assets/bali.jpeg";
import Image9 from "../assets/france.jpeg";
import Image10 from "../assets/Greece.jpeg";
import Image11 from "../assets/kytoto.jpeg";
import Image12 from "../assets/hawai.jpeg";
import Image13 from "../assets/uae.jpeg";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [darkMode, setDarkMode] = useState(false);
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} relative`}>
      {/* Background Music */}
      <audio ref={audioRef} src={backgroundMusic} loop />
      <div className="fixed bottom-5 left-5 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg flex items-center space-x-3 z-50">
        <button onClick={togglePlay} className="text-blue-600 dark:text-blue-400 text-xl">
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
        {volume > 0 ? <FaVolumeUp className="text-blue-600 dark:text-blue-400" /> : <FaVolumeMute className="text-gray-400" />}
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Tripe<span className="text-gray-900 dark:text-white">.</span></div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 font-medium">Home</a>
          <a href="#destinations" className="text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 font-medium">Destinations</a>
          <a href="#services" className="text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 font-medium">Services</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 font-medium">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="hidden md:block p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 font-medium">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="h-screen max-h-[800px] rounded-none md:rounded-lg mx-0 md:mx-4 my-0 md:my-6 overflow-hidden relative">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={travelVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Discover the <span className="text-blue-400">World's Beauty</span> with Our Expert Guides
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Curated travel experiences that transform your vacation into a lifetime memory
              </motion.p>

              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Destination</label>
                  <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
                    <MapPin className="text-gray-400 mr-2" size={20} />
                    <input 
                      type="text" 
                      placeholder="Where to?" 
                      className="w-full text-gray-700 dark:text-gray-300 bg-transparent focus:outline-none" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Travel Dates</label>
                  <input 
                    type="date" 
                    className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none" 
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg self-end transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Search</span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium">POPULAR DESTINATIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Explore Our Featured Locations</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Handpicked destinations that offer unforgettable experiences and breathtaking views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: Image10, title: "Santorini, Greece", desc: "Stunning sunsets & white-washed buildings", price: "$1,200" },
              { img: Image11, title: "Kyoto, Japan", desc: "Serene temples & cherry blossoms", price: "$1,800" },
              { img: Image8, title: "Bali, Indonesia", desc: "Tropical paradise with vibrant culture", price: "$900" },
              { img: Image9, title: "Paris, France", desc: "City of Love with iconic landmarks", price: "$1,500" }
            ].map((location, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={location.img} 
                  alt={location.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{location.title}</h3>
                  <p className="text-gray-300">{location.desc}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-white font-bold">{location.price}</span>
                    <button className="text-white hover:text-blue-300 transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Your Perfect Travel Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              We go above and beyond to ensure your journey is seamless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Compass size={32} className="text-blue-600 dark:text-blue-400" />,
                title: "Expert Guidance",
                desc: "Our travel experts with over 10 years of experience craft personalized itineraries"
              },
              { 
                icon: <Hotel size={32} className="text-blue-600 dark:text-blue-400" />,
                title: "Premium Stays",
                desc: "Carefully selected accommodations that combine comfort and local charm"
              },
              { 
                icon: <Utensils size={32} className="text-blue-600 dark:text-blue-400" />,
                title: "Authentic Experiences",
                desc: "Immerse yourself in local cultures with our unique activity offerings"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-gray-600 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Comprehensive Travel Solutions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Everything you need for a perfect journey, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Plane size={28} />, title: "Flight Booking", desc: "Best deals on flights worldwide with flexible options" },
              { icon: <Hotel size={28} />, title: "Hotel Reservations", desc: "Curated selection of hotels for every budget" },
              { icon: <Compass size={28} />, title: "Tour Packages", desc: "Tailored tours with local expert guides" },
              { icon: <Camera size={28} />, title: "Photography Tours", desc: "Capture stunning moments with professionals" },
              { icon: <Map size={28} />, title: "Adventure Trips", desc: "Thrilling experiences in nature's beauty" },
              { icon: <Utensils size={28} />, title: "Culinary Tours", desc: "Taste authentic local cuisines" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
                <button className="mt-4 text-blue-600 dark:text-blue-400 flex items-center group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Learn more <ChevronRight size={18} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Travelers Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Hear from our satisfied customers about their experiences
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="pb-12"
          >
            {[
              { 
                quote: "The trip to Bali was perfectly organized. Every detail was taken care of, allowing us to just enjoy our vacation.", 
                author: "Sarah Johnson",
                role: "Travel Enthusiast",
                rating: "★★★★★"
              },
              { 
                quote: "Our family had an amazing time in Japan thanks to the excellent itinerary and knowledgeable guides.", 
                author: "Michael Chen",
                role: "Family Traveler",
                rating: "★★★★★"
              },
              { 
                quote: "The photography tour in Santorini exceeded all my expectations. Came back with stunning photos!", 
                author: "Emma Rodriguez",
                role: "Photographer",
                rating: "★★★★☆"
              }
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md h-full">
                  <div className="text-yellow-400 mb-4">{testimonial.rating}</div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium">GLOBAL REACH</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Explore Our Worldwide Destinations</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Discover the incredible locations we operate in across the globe
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <MapContainer center={[20, 0]} zoom={2} className="w-full h-96">
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
              />
              
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  <div className="text-gray-800">
                    <h3 className="font-bold mb-1">London, UK</h3>
                    <p className="text-sm">Historic landmarks and modern attractions</p>
                  </div>
                </Popup>
              </Marker>
              <Marker position={[48.8566, 2.3522]}>
                <Popup>
                  <div className="text-gray-800">
                    <h3 className="font-bold mb-1">Paris, France</h3>
                    <p className="text-sm">Romantic city with iconic architecture</p>
                  </div>
                </Popup>
              </Marker>
              <Marker position={[40.7128, -74.0060]}>
                <Popup>
                  <div className="text-gray-800">
                    <h3 className="font-bold mb-1">New York, USA</h3>
                    <p className="text-sm">The city that never sleeps</p>
                  </div>
                </Popup>
              </Marker>
              <Marker position={[35.6762, 139.6503]}>
                <Popup>
                  <div className="text-gray-800">
                    <h3 className="font-bold mb-1">Tokyo, Japan</h3>
                    <p className="text-sm">Futuristic city with rich traditions</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect trip tailored to your preferences and budget
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-medium">CONTACT US</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Have questions or need assistance with your travel plans? Our team is here to help you 24/7.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">123 Travel Street, Wanderlust City, World</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@tripe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (234) 567-890</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-pink-600 hover:text-white transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white transition-colors">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" 
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" 
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" 
                    placeholder="Your message here"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest travel deals, tips, and inspiration straight to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800" 
              />
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                Tripe<span className="text-blue-400">.</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Making travel dreams a reality with personalized experiences and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Flight Booking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hotel Reservations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tour Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Adventure Trips</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tripe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
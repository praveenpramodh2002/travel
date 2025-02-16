import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import Image1 from "../assets/travel1.jpeg";
import Image2 from "../assets/travel2.jpeg";
import Image3 from "../assets/travel3.jpeg";
import Image4 from "../assets/travel4.jpeg";
import Image5 from "../assets/travel5.jpeg";
import Image6 from "../assets/travel6.jpeg";
import Image7 from "../assets/travel7.jpeg";
import travelVideo from "../assets/video.mp4";

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

      <div className="relative">
        <div className="h-[400px] min-h-[400px] rounded-lg mx-4 my-6 overflow-hidden relative">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            {/* Multiple sources for better compatibility */}
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

      {/* Sweet Memories Section */}
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
          <div className="relative">
            <img src={Image5} alt="Mountain landscape" className="w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Explore More Section */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Explore more</h2>
          <div className="flex space-x-4">
            <button className="bg-gray-100 px-4 py-2 rounded-lg">Hotels</button>
            <button className="bg-gray-100 px-4 py-2 rounded-lg">Dining</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Amalfi Coast", location: "Italy", price: "$340" },
            { name: "Taj Mahal", location: "India", price: "$240" },
            { name: "Cape Refuge", location: "South Africa", price: "$180" }
          ].map((place, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={Image2} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{place.name}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={16} className="mr-1" />
                  {place.location}
                </div>
                <div className="mt-2 font-bold text-blue-600">{place.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adventure Section */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <h2 className="text-2xl font-bold mb-6">Let's go on an adventure</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {['Paris', 'New York', 'Seoul', 'Bali'].map((city, index) => (
            <div key={index} className="flex-none w-24">
              <div className="w-24 h-24 bg-blue-600 rounded-lg mb-2">
                <img src={Image7} alt={city} className="w-full h-full object-cover rounded-lg" />
              </div>
              <p className="text-center">{city}</p>
            </div>
          ))}
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

{/* Footer */}
<footer className="bg-gray-900 text-white py-16">
  <div className="max-w-full mx-auto px-6 md:px-12"> {/* Changed max-w-7xl to max-w-full and px-4 to px-6 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
      {/* About Us Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p className="text-gray-400 text-sm mb-4">
          We help you explore the world with ease and comfort. Join our community of travelers and adventure seekers.
        </p>
        <div className="space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-600 transition"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-600 transition">Destinations</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-600 transition">Blog</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
        <p className="text-gray-400 text-sm mb-4">
          Subscribe to our newsletter to get the latest travel updates and special offers.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 text-gray-700 w-full rounded-l-lg"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <p className="text-gray-400 text-sm mb-4">info@tripe.com</p>
        <p className="text-gray-400 text-sm">+1 (800) 123-4567</p>
        <p className="text-gray-400 text-sm">Location: 123 Adventure St, Traveler City</p>
      </div>

      {/* Legal Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Legal</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-blue-600 transition">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-600 transition">Terms of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-600 transition">Cookies Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-12 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} TripCo. All rights reserved.</p>
      <p className="mt-2 text-sm">Designed with ❤️ by TripCo Team</p>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Home;

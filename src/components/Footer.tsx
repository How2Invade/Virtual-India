import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                VirtualIndia
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Experience India like never before with our immersive virtual tours and travel planning services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#home" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="/#destinations" className="text-gray-400 hover:text-purple-500 transition-colors">Destinations</a>
              </li>
              <li>
                <a href="/#experiences" className="text-gray-400 hover:text-purple-500 transition-colors">Experiences</a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-purple-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Taj Mahal, Agra</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Jaipur, Rajasthan</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Varanasi, Uttar Pradesh</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Kerala Backwaters</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Goa Beaches</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-500 mt-0.5" />
                <span className="text-gray-400">123 Tourism Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-500" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-500" />
                <span className="text-gray-400">info@virtualindia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VirtualIndia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
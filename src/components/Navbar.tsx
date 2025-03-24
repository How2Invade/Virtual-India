import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                VirtualIndia
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/#home" className={`nav-link ${location.hash === '#home' || location.hash === '' ? 'active' : ''}`}>
                Home
              </a>
              <a href="/#destinations" className={`nav-link ${location.hash === '#destinations' ? 'active' : ''}`}>
                Destinations
              </a>
              <a href="/#experiences" className={`nav-link ${location.hash === '#experiences' ? 'active' : ''}`}>
                Experiences
              </a>
              <a href="/#about" className={`nav-link ${location.hash === '#about' ? 'active' : ''}`}>
                About
              </a>
              <a href="/#contact" className={`nav-link ${location.hash === '#contact' ? 'active' : ''}`}>
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="btn-primary">Book Now</button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md">
          <a
            href="/#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="/#destinations"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
            onClick={closeMenu}
          >
            Destinations
          </a>
          <a
            href="/#experiences"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
            onClick={closeMenu}
          >
            Experiences
          </a>
          <a
            href="/#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="/#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
            onClick={closeMenu}
          >
            Contact
          </a>
          <button className="w-full mt-4 btn-primary">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
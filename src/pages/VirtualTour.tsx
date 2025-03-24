import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Info, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeDViewer from '../components/ThreeDViewer';
import LocationMap from '../components/LocationMap';
import BookingForm from '../components/BookingForm';
import { locationsData, Location } from '../data/locationsData';

const VirtualTour: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const [location, setLocation] = useState<Location | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'booking'>('info');

  useEffect(() => {
    // Find the location data based on the ID from the URL
    const foundLocation = locationsData.find(loc => loc.id === locationId);
    if (foundLocation) {
      setLocation(foundLocation);
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [locationId]);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Location not found</h2>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Destinations
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-2"
      >
        {location.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center mb-8 text-gray-300"
      >
        <MapPin className="h-5 w-5 text-purple-500 mr-2" />
        <span>{location.location}</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 3D Viewer - Takes up 2/3 of the space on large screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 h-[500px] relative"
        >
          <ThreeDViewer modelPath={location.modelPath} />
        </motion.div>

        {/* Information Panel - Takes up 1/3 of the space on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="tour-info-panel h-[500px] overflow-y-auto"
        >
          <div className="flex mb-6 border-b border-gray-700">
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === 'info'
                  ? 'text-purple-400 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('info')}
            >
              <Info className="h-5 w-5 inline mr-2" />
              Information
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === 'booking'
                  ? 'text-purple-400 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('booking')}
            >
              <Calendar className="h-5 w-5 inline mr-2" />
              Book Trip
            </button>
          </div>

          {activeTab === 'info' ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <p className="text-gray-300">{location.longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Famous For</h3>
                <ul className="space-y-2">
                  {location.famousFor.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-gray-300">{location.bestTimeToVisit}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <LocationMap
                  latitude={location.latitude}
                  longitude={location.longitude}
                  name={location.name}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Historical Facts</h3>
                <ul className="space-y-2">
                  {location.historicalFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 font-bold mr-2">{index + 1}.</span>
                      <span className="text-gray-300">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Nearby Attractions</h3>
                <ul className="space-y-2">
                  {location.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <BookingForm locationName={location.name} />
          )}
        </motion.div>
      </div>

      {/* Related Destinations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold mb-6">More Destinations to Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationsData
            .filter(loc => loc.id !== location.id)
            .slice(0, 4)
            .map((loc, index) => (
              <Link
                key={loc.id}
                to={`/virtual-tour/${loc.id}`}
                className="location-card h-64"
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                />
                <div className="overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{loc.name}</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="h-4 w-4 text-purple-400 mr-1" />
                    <span>{loc.location}</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VirtualTour;
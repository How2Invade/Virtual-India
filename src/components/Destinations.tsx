import React from 'react';
import { motion } from 'framer-motion';
import LocationCard from './LocationCard';
import { locationsData } from '../data/locationsData';

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">Popular Destinations</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover India's most iconic landmarks and hidden gems through immersive 3D experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locationsData.map((location, index) => (
          <LocationCard
            key={location.id}
            id={location.id}
            name={location.name}
            location={location.location}
            description={location.description}
            image={location.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
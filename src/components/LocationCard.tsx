import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  index: number;
}

const LocationCard: React.FC<LocationCardProps> = ({ id, name, location, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="location-card h-96"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="overlay"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center mb-2">
          <MapPin className="h-5 w-5 text-purple-400 mr-2" />
          <span className="text-sm text-purple-300">{location}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        <Link to={`/virtual-tour/${id}`} className="btn-primary inline-block">
          Explore in 3D
        </Link>
      </div>
    </motion.div>
  );
};

export default LocationCard;
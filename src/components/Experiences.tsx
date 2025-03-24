import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Map, Users, Calendar } from 'lucide-react';

const experienceItems = [
  {
    icon: <Camera className="h-10 w-10 text-purple-500" />,
    title: "Immersive 3D Tours",
    description: "Experience realistic 3D virtual tours of India's most iconic landmarks and destinations."
  },
  {
    icon: <Map className="h-10 w-10 text-purple-500" />,
    title: "Interactive Maps",
    description: "Explore detailed maps showing exact locations and points of interest for each destination."
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "Expert Guides",
    description: "Learn from virtual guides who share fascinating historical and cultural insights."
  },
  {
    icon: <Calendar className="h-10 w-10 text-purple-500" />,
    title: "Trip Planning",
    description: "Plan and book your real-world trip to India with our comprehensive travel services."
  }
];

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Unique Experiences</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our virtual tours offer more than just sightseeing. Discover what makes our platform special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
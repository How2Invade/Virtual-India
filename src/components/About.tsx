import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "High-quality 3D virtual tours of India's most iconic destinations",
    "Detailed information about each location's history and cultural significance",
    "Interactive maps showing exact locations and nearby attractions",
    "Comprehensive travel planning and booking services",
    "Expert guides and cultural insights",
    "Regular updates with new destinations and experiences"
  ];

  const teamMembers = [
    {
      name: "Meet Mangaonkar",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Varad Joshi",
      role: "Co-Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            Meet the Team Behind VirtualIndia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The creative minds bringing India's cultural heritage to your screens through immersive experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">
                  Passionate about bringing India's rich cultural heritage to the world through innovative technology.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About VirtualIndia</h2>
            <p className="text-lg text-gray-600 mb-6">
              VirtualIndia is a cutting-edge platform that brings the wonders of India to your screen through immersive 3D experiences. Our mission is to showcase India's rich cultural heritage and breathtaking landscapes to the world.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're planning a trip to India or simply want to explore from the comfort of your home, our virtual tours provide an authentic and engaging experience that captures the essence of each destination.
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-[#d4b595] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="India landscape"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#d4b595] rounded-xl p-6 max-w-xs">
              <p className="text-white font-medium">
                "Our goal is to make India's cultural treasures accessible to everyone, anywhere in the world."
              </p>
              <p className="text-[#f5e6d3] mt-2">- VirtualIndia Team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
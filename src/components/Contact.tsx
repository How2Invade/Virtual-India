import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our virtual tours or need help planning your trip to India? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary flex items-center justify-center w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="glass-card mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Our Location</h4>
                    <p className="text-gray-300 mt-1">123 Tourism Street, New Delhi, India 110001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Email Us</h4>
                    <p className="text-gray-300 mt-1">info@virtualindia.com</p>
                    <p className="text-gray-300">support@virtualindia.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Call Us</h4>
                    <p className="text-gray-300 mt-1">+91 98765 43210</p>
                    <p className="text-gray-300">+91 12345 67890</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
            <div className="glass-card">
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { Calendar, Users, CreditCard, Globe, Plane } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface BookingFormProps {
  locationName: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ locationName }) => {
  const [bookingType, setBookingType] = useState<'virtual' | 'physical'>('virtual');
  const [step, setStep] = useState(1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('ticket-container')?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        animate(mouseX, x);
        animate(mouseY, y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5e6d3] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Experience</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setBookingType('virtual')}
              className={`px-6 py-3 rounded-lg flex items-center ${
                bookingType === 'virtual'
                  ? 'bg-[#d4b595] text-white'
                  : 'bg-white text-gray-800 hover:bg-[#d4b595] hover:text-white'
              } transition-all duration-300`}
            >
              <Globe className="mr-2" />
              Virtual Tour
            </button>
            <button
              onClick={() => setBookingType('physical')}
              className={`px-6 py-3 rounded-lg flex items-center ${
                bookingType === 'physical'
                  ? 'bg-[#d4b595] text-white'
                  : 'bg-white text-gray-800 hover:bg-[#d4b595] hover:text-white'
              } transition-all duration-300`}
            >
              <Plane className="mr-2" />
              Physical Trip
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* Interactive Ticket */}
          <motion.div
            id="ticket-container"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="w-full max-w-4xl mb-12"
          >
            <img
              src="/virtual-voyage-ticket.png"
              alt="Virtual Voyage Ticket"
              className="w-full h-auto rounded-xl shadow-2xl"
              style={{ transform: 'translateZ(20px)' }}
            />
          </motion.div>

          {/* Booking Form */}
          <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-xl">
            {bookingType === 'virtual' ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Virtual Tour Booking - {locationName}
                </h3>
                <div>
                  <label className="block text-gray-700 mb-2">Select Date and Time</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4b595] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Number of Viewers</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4b595] focus:border-transparent">
                    <option>1 Viewer</option>
                    <option>2 Viewers</option>
                    <option>3 Viewers</option>
                    <option>4+ Viewers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Tour Duration</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4b595] focus:border-transparent">
                    <option>30 Minutes</option>
                    <option>1 Hour</option>
                    <option>2 Hours</option>
                  </select>
                </div>
                <button className="w-full bg-[#d4b595] text-white py-3 rounded-lg hover:bg-[#c4a585] transition-colors">
                  Book Virtual Tour (₹499)
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Physical Trip Booking - {locationName}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Check-in Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4b595] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Check-out Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4b595] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Number of Travelers</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4b595] focus:border-transparent">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Package Type</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4b595] focus:border-transparent">
                    <option>Basic Package (₹9,999)</option>
                    <option>Standard Package (₹14,999)</option>
                    <option>Premium Package (₹24,999)</option>
                    <option>Luxury Package (₹49,999)</option>
                  </select>
                </div>
                <button className="w-full bg-[#d4b595] text-white py-3 rounded-lg hover:bg-[#c4a585] transition-colors">
                  Continue to Book Trip
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
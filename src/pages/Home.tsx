import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Experiences from '../components/Experiences';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Destinations />
      <Experiences />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
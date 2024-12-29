import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Footer from './Footer';
import Navbar from '../../components/navbar/Navbar';

function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleMenuClick = (section) => {
    if (section === 'home') {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar onMenuClick={handleMenuClick} />
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

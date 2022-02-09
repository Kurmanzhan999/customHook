import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import NavBar from '../components/NavBar';

function AboutUs() {
  return (
    <div>
      <NavBar />
      <HeroImage heading="WORLD IS AWESOME" text="Love & Save" />
      <AboutUsCard />
      <Footer />
    </div>
  );
}

export default AboutUs;

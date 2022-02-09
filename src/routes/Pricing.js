import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import NavBar from '../components/NavBar';
import Pricing from '../components/Pricing';
function Pricings() {
  return (
    <>
      <NavBar />
      <HeroImage heading="Pricing" text="Chose your trip" />
      <Pricing />
      <Footer />
    </>
  );
}

export default Pricings;

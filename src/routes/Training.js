import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import NavBar from '../components/NavBar';
import TrainingCard from '../components/Training';

function Training() {
  return (
    <div>
      <NavBar />
      <HeroImage heading="TRAINING" text="Pre-flight & In-flight training" />
      <TrainingCard />
      <Footer />
    </div>
  );
}

export default Training;

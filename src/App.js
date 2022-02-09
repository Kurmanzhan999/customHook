import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './routes/AboutUs';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;

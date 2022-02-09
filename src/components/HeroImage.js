import React from 'react';
import './HeroImage.css';

function HeroImage({ heading, text }) {
  return (
    <div className="heroImg">
      <h1 className="heading">
        {heading}
        <p>{text}</p>
      </h1>
    </div>
  );
}

export default HeroImage;

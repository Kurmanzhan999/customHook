import React from 'react';
import './Training.css';
import Pod from '../assets/pod.jpg';
import People from '../assets/meyou.jpg';
import { Link } from 'react-router-dom';

function Training() {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Thorough training is a necessity when traveling to space. We offer all
          inclusive training for pre-flight and in-flight scenarios.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="top"></div>
          <div className="bottom">
            {/* <img src={Pod} classname="img" alt="" /> */}
            <img src={People} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;

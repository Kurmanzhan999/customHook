import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';
import { Link } from 'react-router-dom';
function NavBar() {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const colorhandler = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', colorhandler);
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={clickHandler}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
}

export default NavBar;

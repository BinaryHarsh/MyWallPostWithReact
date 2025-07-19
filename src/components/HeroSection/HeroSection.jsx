import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import './HeroSection.css';
import heroBg from '../../assets/images/heroBg.jpg';


function HeroSection() {
  return (
    <header
      className="hero-section mt-1 h-100vh"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="hero-overlay" />

      <div className="hero-content container">
        {/* Left Column: Text and Typewriter */}
        <div className="text-col">
          <h1 className='' style={{ color: '#D96F32' }}>
            Give Wings to Your Business{' '}
            <span className="typewriter-text" style={{color:"white"}}>
              <Typewriter
                words={[' Development', ' Marketing', ' Web Designing', ' SEO/SMO']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="lead">
            An Affordable Digital Marketing and Website Designing Company in Meerut.
          </p>

          <Link to="/about" className="btn btn-light btn-lg">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;

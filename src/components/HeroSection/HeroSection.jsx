// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  return (
    <header className="bg-primary text-white text-center py-5">
      <h1>
        {/* Give Wings to Your Business... */}
        Give Wings to Your Busnisess {' '}
      <span style={{ color: 'black', fontWeight: 'bold' }}>
        <Typewriter
          words={[' Development', 'marketing', 'web designing', 'SEO/SMO']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>

      </h1>
      <p className="lead">An Affordable Digital Marketing and Website Designing Company in Meerut.</p>
      <Link to="/about" className="btn btn-light btn-lg">Get Started</Link>
    </header>
  );
}
export default HeroSection;

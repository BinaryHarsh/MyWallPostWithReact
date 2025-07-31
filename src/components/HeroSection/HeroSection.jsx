import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6">
            <h1 className="text-primary mb-3">
              Give Wings to Your Business{' '}
              <span className="typewriter-text text-dark">
                <Typewriter
                  words={['Development', 'Marketing', 'Web Designing', 'SEO/SMO']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="lead text-muted">
              An Affordable Digital Marketing and Website Designing Company in Meerut.
            </p>
            <Link to="/about" className="btn btn-primary btn-lg mt-3">
              Get Started
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxoZXJvfGVufDB8MHx8fDE3MTIwNzMwNDh8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Hero"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

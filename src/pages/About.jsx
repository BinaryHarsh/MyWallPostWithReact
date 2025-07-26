import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './AboutUs.css';

const CounterItem = ({ value, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      const duration = 2000; // Animation duration in ms
      const increment = value / (duration / 20); // Calculate increment per interval
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(current));
        }
      }, 20);
    }
  }, [inView, hasAnimated, value]);

  return (
    <div className="col-md-3 col-6 mb-4" ref={ref}>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <i className={`bi ${icon} fs-1 text-primary mb-2`}></i>
        <motion.h2 
          className="fw-bold mb-0"
          animate={hasAnimated ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3, times: [0, 0.5, 1] }}
        >
          {count}+
        </motion.h2>
        <p className="text-muted mt-2">{label}</p>
      </motion.div>
    </div>
  );
};

function About() {
  return (
    <>
      <section className="about-us py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold mb-4">About Our Company</h2>
              <p className="text-muted mb-4">
                My Wall Post is a premier digital agency specializing in creating impactful online experiences. 
                Founded in 2015, we've helped businesses of all sizes establish a strong digital presence through 
                innovative solutions and strategic thinking.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="text-primary">Our Mission</h5>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle me-2 text-primary"></i>Innovative Solutions</li>
                    <li><i className="bi bi-check-circle me-2 text-primary"></i>Customer Satisfaction</li>
                    <li><i className="bi bi-check-circle me-2 text-primary"></i>Sustainable Practices</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="text-primary">Our Vision</h5>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-bullseye me-2 text-primary"></i>Global Reach</li>
                    <li><i className="bi bi-bullseye me-2 text-primary"></i>Industry Leadership</li>
                    <li><i className="bi bi-bullseye me-2 text-primary"></i>Continuous Growth</li>
                  </ul>
                </div>
              </div>
              <a href="#" className="btn btn-primary mt-4 about-us-button">
                Learn More
              </a>
            </div>
            <div className="col-md-6">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wYW55fGVufDB8MHx8fDE3MjEyMTE5MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="About Us" 
                className="img-fluid rounded shadow about-us-image"
              />
            </div>
          </div>

          <div className="row mt-5">
            <CounterItem value={500} label="Clients" icon="bi-people" />
            <CounterItem value={1000} label="Projects" icon="bi-briefcase" />
            <CounterItem value={50} label="Awards" icon="bi-trophy" />
            <CounterItem value={20} label="Countries" icon="bi-globe" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
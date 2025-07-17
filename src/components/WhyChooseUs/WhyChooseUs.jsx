// WhyChooseUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function WhyChooseUs() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-3">Why Choose Us</h2>
      <p className="text-center mb-4">
        We will help you to achieve your business goals by Digital Marketing services in Meerut.
      </p>
      <ul className="ps-4 mb-4">
        <li><strong>Energetic</strong> – We provide strategic vision ...</li>
        <li><strong>Committed Team</strong> – We accompany our clients...</li>
        <li><strong>Track Record</strong> – We can show an outstanding track record...</li>
      </ul>
      <div className="text-center mt-3">
        <Link className="btn btn-primary px-4 py-2" to="/about">Get Started</Link>
      </div>
    </section>
  );
}

export default WhyChooseUs;

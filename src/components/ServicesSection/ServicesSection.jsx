import React from 'react';
import {
  BsLaptop,
  BsPhone,
  BsGraphUp,
  BsMegaphone,
  BsPalette,
  BsSearch,
} from 'react-icons/bs';
import './ServicesSection.css';

const services = [
  {
    icon: <BsLaptop size={32} color="white" />,
    title: 'Web Development',
    description:
      'Create stunning, responsive websites tailored to your brand\'s unique vision and goals.',
  },
  {
    icon: <BsPhone size={32} color="white" />,
    title: 'Mobile Apps',
    description:
      'Build powerful mobile applications that engage users and drive results.',
  },
  {
    icon: <BsGraphUp size={32} color="white" />,
    title: 'Analytics',
    description:
      'Transform your data into actionable insights with our advanced analytics solutions.',
  },
  {
    icon: <BsMegaphone size={32} color="white" />,
    title: 'Digital Marketing',
    description:
      'Drive traffic, leads, and growth through our custom marketing campaigns across multiple platforms.',
  },
  {
    icon: <BsPalette size={32} color="white" />,
    title: 'Web Design',
    description:
      'Our creative team designs visually stunning and user-friendly websites that reflect your brand identity.',
  },
  {
    icon: <BsSearch size={32} color="white" />,
    title: 'SEO / SMO',
    description:
      'Boost your online visibility and ranking through smart search engine and social media optimization.',
  },
];

function ServicesSection() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-5">
          <span className="custom-badge text-white mb-3 d-inline-block bg-primary px-3 py-1 rounded-pill">
            Our Services
          </span>
          <h2 className="display-5 fw-bold mb-3">What We Offer</h2>
          <p className="text-muted">
            Discover our range of professional services tailored to your needs
          </p>
        </div>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="service-card h-100 p-4 bg-dark text-white rounded shadow-sm">
              <div className="icon-wrapper mb-4">{service.icon}</div>
              <h4 className="service-title text-center mb-3">{service.title}</h4>
              <p className="service-text text-center mb-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;

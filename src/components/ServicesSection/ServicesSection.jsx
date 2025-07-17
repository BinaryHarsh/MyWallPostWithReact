// ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BsLaptop, BsTelephone, BsHddNetwork, BsMouse } from 'react-icons/bs';
import './ServicesSection.css'; // Optional: add styling here

const services = [
  {
    icon: <BsLaptop size={40} />,
    title: 'Web Design',
    subtitle: 'And Development',
    description: 'We love creative and design with passion of building epic web experiences to blow people\'s minds.',
    link: '/services/web-design'
  },
  {
    icon: <BsTelephone size={40} />,
    title: 'Online Marketing',
    subtitle: 'Digital Marketing',
    description: '“It’s much easier to double your business by doubling your conversion rate than by doubling your traffic.”',
    link: '/services/marketing'
  },
  {
    icon: <BsHddNetwork size={40} />,
    title: 'Search Engine',
    subtitle: 'Optimization',
    description: '“Today It’s Not About ‘Get the Traffic’ — It’s About ‘Get the Targeted and Relevant Traffic.”',
    link: '/services/seo'
  },
  {
    icon: <BsMouse size={40} />,
    title: 'Social Media',
    subtitle: 'Optimization',
    description: 'Ignoring social media marketing is like opening a business but not telling anyone.',
    link: '/services/social-media'
  }
];

function ServicesSection() {
  return (
    <section className="py-5 text-light container-fluid px-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container text-center">
        <h4 className="text-secondary">What We Do</h4>
        <h2 className="fw-bold mb-3">Our <span className="text-white">Latest</span> Services</h2>
        <p className="mb-5 text-muted">Something knows About Our Services</p>

        <div className="row">
          {services.map((service, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#1e293b' }}>
                <div className="mb-3 text-primary">{service.icon}</div>
                <h6 className="text-muted">{service.title}</h6>
                <h5 className="fw-bold text-white mb-3">{service.subtitle}</h5>
                <p className="text-muted small">{service.description}</p>
                <Link to={service.link} className="text-white text-decoration-none">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

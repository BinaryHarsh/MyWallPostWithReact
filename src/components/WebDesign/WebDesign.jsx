import React, { useState, useEffect } from 'react';
import HomeSection2 from '../HeroSection/HomeSection2.jsx';
import DevImage from '../../assets/images/webDev3.jpg';
import WebDev from '../../assets/images/WebDev5.jpg';
import webDev1 from "../../assets/images/Webdev4.jpg";
import webDev2 from "../../assets/images/Webdev6.jpg";
import Meeting from '../../assets/images/meeting.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

function WebDesign() {
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div>
      {/* ✅ Hero Section */}
      <HomeSection2
        heading="Website Design in Meerut"
        typewriterWords={["Startups", "Brands", "Businesses", "Entrepreneurs"]}
        description="Build high-converting, mobile-friendly websites with Smart Digital Wings – the best web design company in Meerut."
        image={DevImage}
        btnText="Get Free Consultation"
        btnLink="/contact"
      />

      <div className="container-fluid p-0">
        {/* ✅ Section 1 */}
        <div className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={WebDev} alt="Web Design" className="img-fluid" />
            <div className="bg-warning text-white p-4 mt-4 fw-bold rounded">
              "We don't just build websites, we build websites that SELLS"
            </div>
          </div>

          <div className="col-md-6">
            <h2>
              <strong>Company In </strong>
              <span className="text-warning">Meerut</span>
            </h2>
            <p className="text-muted">Hire us today! Get a free quote.</p>
            <h5 className="fw-bold mt-4 mb-3">
              Best Website Design Company Meerut
            </h5>
            <p>
              Looking for a beautiful, new website? You are at the right place! We deliver cutting edge websites that are beautiful to look at and perform equally well.
            </p>
            <p>
              We ensure a solid user experience that delivers substantially higher audience engagement and conversion rates.
            </p>
            <a href="#contact" className="btn btn-primary mt-3 px-4 rounded-3">
              Get Started
            </a>
          </div>
        </div>

        {/* ✅ Section 2 */}
        <section className="row align-items-center p-5 bg-light" data-aos="fade-left">
          <div className="col-md-6 order-2 order-md-1">
            <h2>
              Web Design <strong>Company In </strong>
              <span className="text-warning">Meerut</span>
            </h2>
            <p className="text-muted fs-5">Take your business online with an attractive website</p>
            <p>
              Be it a startup, enterprise or large-scale organization, our strategy is the same – to understand user behavior and maximize engagement.
            </p>
            <a href="#contact" className="btn btn-warning text-white px-4 mt-3 rounded-3">
              Hire Us
            </a>
          </div>
          <div className="col-md-6 order-1 order-md-2 text-center">
            <img src={webDev1} alt="Web Design" className="img-fluid" />
          </div>
        </section>

        {/* ✅ Section 3 */}
        <section className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={webDev2} alt="Web Design" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Website Design <strong>Meerut</strong></h2>
            <p className="text-muted">
              Smart Digital Wings is one of the best online web design companies in Meerut.
            </p>
            <p>
              Contact us via form or call <strong>+91-7017281826</strong> for the best advice and packages.
            </p>
            <p>
              Along with websites, we also provide digital marketing services.
            </p>
            <a href="#contact" className="btn btn-primary px-4 mt-3 rounded-3">
              Get Started
            </a>
          </div>
        </section>

        {/* ✅ Section 4 – FAQs */}
        <section className="row justify-content-center align-items-start p-5 bg-light" data-aos="fade-up">
          <div className="col-md-8">
            <h2>
              Web Design <strong>Services </strong>
              <span className="text-warning">FAQs</span>
            </h2>
            <p className="text-muted fs-5">Things you should know about website design</p>

            {/* Fixed answer block */}
            <div className="bg-primary text-white p-4 rounded mb-3">
              <h5>What domain name should I choose?</h5>
              <p>It should be short, memorable, and easy to pronounce/spell.</p>
            </div>

            {/* FAQ List */}
            {[1, 2, 3, 4].map((id) => {
              const questions = {
                1: 'How long will it take to design my website?',
                2: 'Will we need to meet regularly during the design process?',
                3: 'Do you provide website maintenance after launch?',
                4: 'Can I update the website content myself?',
              };

              const answers = {
                1: 'Simple websites take 1-2 weeks, complex sites with custom features take 3-6 weeks.',
                2: 'We communicate via email, calls, and project tools. Physical meetings are optional.',
                3: 'Yes, we offer maintenance packages for updates, security, and performance optimization.',
                4: 'Absolutely! We provide CMS training so you can manage content easily.',
              };

              return (
                <div
                  key={id}
                  className={`p-3 mb-3 rounded ${openItem === id ? 'bg-primary text-white' : 'bg-white text-dark'}`}
                  onClick={() => toggleItem(id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">{questions[id]}</h6>
                    {openItem === id ? (
                      <FaMinus className="fs-5" />
                    ) : (
                      <FaPlus className="fs-5" />
                    )}
                  </div>
                  {openItem === id && <p className="mt-2">{answers[id]}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* ✅ Section 5 – Get A Quote */}
        <section className="quote-banner" data-aos="zoom-in" style={{ backgroundImage: `url(${Meeting})` }}>
          <div className="content">
            <h1 className="mb-3 text-white">Get A Quote</h1>
            <h2 className="mb-4 text-white">Free Consultations</h2>
            <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill">
              Request A Quote
            </button>
          </div>
        </section>

        {/* ✅ Section 7 – Technologies Used */}
        <section className="py-5 bg-white" data-aos="fade-up">
          <div className="container text-center">
            <h2 className="mb-4">
              <strong>Technologies </strong>We Use
            </h2>
            <p className="text-muted mb-5">
              We build responsive, SEO-friendly websites using modern tech stacks.
            </p>
            <div className="row g-4">
              {[
                { name: 'React', logo: 'https://img.icons8.com/color/96/react-native.png' },
                { name: 'Angular', logo: 'https://img.icons8.com/color/96/angularjs.png' },
                { name: 'Vue.js', logo: 'https://img.icons8.com/color/96/vue-js.png' },
                { name: 'WordPress', logo: 'https://img.icons8.com/color/96/wordpress.png' },
                { name: 'Shopify', logo: 'https://img.icons8.com/color/96/shopify.png' },
                { name: 'Node.js', logo: 'https://img.icons8.com/color/96/nodejs.png' },
              ].map((tech, idx) => (
                <div className="col-6 col-md-2 text-center" key={idx}>
                  <img src={tech.logo} alt={tech.name} className="img-fluid mb-2" style={{ height: 64 }} />
                  <h6 className="mt-2">{tech.name}</h6>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Section 8 – Why Choose Us */}
        <section className="py-5 bg-light" data-aos="fade-up">
          <div className="container text-center">
            <h2 className="mb-4">
              Why <strong>Choose Us</strong>
            </h2>
            <div className="row g-4">
              {[
                {
                  icon: '🎨',
                  title: 'Creative Designs',
                  desc: 'Unique, visually appealing designs that represent your brand.',
                },
                {
                  icon: '📱',
                  title: 'Mobile-First Approach',
                  desc: 'Websites that look perfect on all devices.',
                },
                {
                  icon: '🔍',
                  title: 'SEO Optimized',
                  desc: 'Built with SEO best practices for better visibility.',
                },
                {
                  icon: '⚡',
                  title: 'Fast Loading',
                  desc: 'Optimized for speed and performance.',
                },
              ].map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="bg-white p-4 shadow-sm rounded h-100">
                    <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                    <h5 className="mt-3">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Section 9 – Testimonials */}
        <section className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">What Our Clients Say</h2>
            <div className="row justify-content-center">
              {[
                {
                  name: 'Rajesh Kumar',
                  text: 'Our e-commerce website conversion rate increased by 40% after Smart Digital Wings redesign. Highly recommended!',
                },
                {
                  name: 'Priya Sharma',
                  text: 'Professional, responsive, and delivered beyond expectations. Our new website perfectly represents our brand.',
                },
              ].map((review, i) => (
                <div className="col-md-5 m-3 p-4 border rounded shadow-sm" key={i}>
                  <p className="fst-italic">“{review.text}”</p>
                  <h6 className="fw-bold mt-3">– {review.name}</h6>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WebDesign;
// WebDevIntroSection.jsx
import React from 'react';
import { useState, useRef } from 'react';
import HomeSection2 from '../HeroSection/HomeSection2.jsx'
import DevImage from '../../assets/images/webDev1.jpg';
import Meeting from '../../assets/images/meeting.png';
import devlogo from '../../assets/images/devlogo3.jpg';
import devlogo2 from '../../assets/images/devlogo4.jpg';
import WebDev from '../../assets/images/Logoweb4.jpg'

import './Style.css';
import { categories } from '../../assets/images/images.js';

function seosmo({ category, setCategory }) {
  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };
  const menuRef = useRef(null);
  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div>
        <HomeSection2
        heading="SEO / SMO in Meerut"
        breadcrumbText={
          <>
            <span className="text-black">Home</span> &nbsp;|&nbsp;
            <span className="text-warning font-1xl fw-semibold">
              SEO/SMO 
            </span>
            <span className="text-warning fw-semibold">
              {' '}
              || SEO/SMO  Meerut
            </span>
          </>
        }
        bgImage={WebDev}
      />
        <div className="container-fluid p-0">
      {/* SECTION 1 */}
      <div className="row align-items-center p-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={DevImage} alt="SEO / SMO" className="img-fluid" />
          <div className="bg-warning text-white p-4 mt-4 fw-bold rounded">
            “We don't just build websites, we build websites that SELLS”
          </div>
        </div>

        <div className="col-md-6">
          <h2>
            <strong>Company In </strong>
            <span className="text-warning">Meerut</span>
          </h2>
          <p className="text-muted">Hire us today! Get a free quote.</p>
          <h5 className="fw-bold mt-4 mb-3">
            Best SEO / SMO Company Meerut
          </h5>
          <p>
            Looking for a beautiful, new website? You are at the right place! We deliver cutting edge websites that are beautiful to look at and perform equally well.
          </p>
          <p>
            We ensure a solid user experience that delivers higher engagement and conversion. Smart Digital Wings is a premier SEO / SMO company in Meerut.
          </p>
          <a href="#contact" className="btn btn-primary mt-3 px-4 rounded-3">
            Get Started
          </a>
        </div>
      </div>

      {/* SECTION 2 */}
      <section className="row align-items-center p-5 bg-light">
        <div className="col-md-6 order-2 order-md-1">
          <h2>
            SEO / SMO <strong>Company In </strong>
            <span className="text-warning">Meerut</span>
          </h2>
          <p className="text-muted fs-5">Take your business online with an attractive website</p>
          <p>
            With 6+ years of experience, we’ve delivered 55+ projects across industries like healthcare, education, eCommerce, finance, and more.
          </p>
          <a href="#contact" className="btn btn-warning text-white px-4 mt-3 rounded-3">
            Hire Us
          </a>
        </div>
        <div className="col-md-6 order-1 order-md-2 text-center">
          <img src={devlogo} alt="Web Development Server" className="img-fluid" />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="row align-items-center p-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={devlogo2} alt="Web Development Extra" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>SEO / SMO <strong>Meerut</strong></h2>
          <p className="text-muted">
            Smart Digital Wings is one of the best SEO / SMO companies in Meerut.
          </p>
          <p>
            Get in touch via our contact form or call <strong>+91-9310891024</strong>. We’ll guide you with the best strategy.
          </p>
          <a href="#contact" className="btn btn-primary px-4 mt-3 rounded-3">
            Get Started
          </a>
        </div>
      </section>

      {/* SECTION 4 – FAQs */}
      <section className="row justify-content-center align-items-start p-5 bg-light">
        <div className="col-md-8">
          <h2>
            SEO / SMO <strong>Services </strong>
            <span className="text-warning">FAQs</span>
          </h2>
          <p className="text-muted fs-5">Something you should know about website development</p>

          <div className="bg-primary text-white p-4 rounded mb-3">
            <h5>What domain name should I choose?</h5>
            <p>A name that's easy to spell, pronounce, and memorable is best. Avoid confusion.</p>
          </div>

          {[1, 2].map((id) => (
            <div
              key={id}
              className="p-3 rounded mb-3"
              onClick={() => toggleItem(id)}
              style={{
                backgroundColor: openItem === id ? '#397eff' : '#f8f9fa',
                color: openItem === id ? '#fff' : '#333',
                cursor: 'pointer',
              }}
            >
              <h6>
                {id === 1
                  ? 'How long will it take for my website to be designed?'
                  : 'Will we have to have a meeting to discuss the website design?'}
              </h6>
              {openItem === id && (
                <p className="mt-2">
                  The timeline depends on complexity. Simple sites may take 1-2 weeks; complex ones 3-4+ weeks.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 – Get A Quote Banner */}
      <section className="quote-banner">
        <div className="content">
          <h1 className="mb-3 text-white">Get A Quote</h1>
          <h2 className="mb-4 text-white">Free Consultations</h2>
          <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill">
            Request A Quote
          </button>
        </div>
      </section>

      {/* SECTION 6 – Category Icons */}
      <section className="py-5" style={{ backgroundColor: '#f3f7fc' }}>
        <div className="d-flex justify-content-between gap-4 overflow-auto px-3" ref={menuRef}>
          {categories.map((item, index) => (
            <div
              key={index}
              className="text-center explore-menu-list-item"
              onClick={() =>
                setCategory((prev) => (prev === item.category ? 'All' : item.category))
              }
            >
              <img
                src={item.icon}
                alt=""
                className={`rounded-circle ${item.category === category ? 'active' : ''}`}
                height={128}
                width={128}
              />
              <p className={`mt-2 fw-bold ${item.category === category ? 'text-active' : ''}`}>
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}

export default seosmo;

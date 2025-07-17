import React from 'react';
import { useState } from 'react';
import DevImage from '../../assets/images/webDev.png';
import Meeting from '../../assets/images/meeting.png';
import './Style.css';

function WebDevIntroSection() {
  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="container my-5" style={{ width: "100vw" }}>

      {/* SECTION 1 – Original Layout (Image Left, Quote Box) */}
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={DevImage} alt="Web Development" className="img-fluid" />
          <div
            style={{
              backgroundColor: '#FF6A00',
              color: 'white',
              padding: '40px',
              marginTop: '60px',
              fontWeight: '700',
              fontSize: '1.4rem',
              borderRadius: '6px',
              lineHeight: '1.4',
            }}
          >
            “We don't just build websites, we build websites that SELLS”
          </div>
        </div>

        <div className="col-md-6">
          <h2>
            <strong>Company In </strong>
            <span style={{ color: '#FF6A00' }}>Meerut</span>
          </h2>
          <p className="text-muted mb-2">Hire us today! Get a free quote.</p>
          <h5 className="fw-bold mt-4 mb-3">Best Website Development Company Meerut</h5>
          <p>
            Looking for a beautiful, new website? You are at the right place! We deliver cutting edge websites that are beautiful to look at and perform equally well.
            We ensure a solid user experience that delivers substantially higher audience engagement and conversion rates.
          </p>
          <p>
            It’s not just the website; we create a seamless user experience that keeps them coming back. We are recognized among leading custom web development companies.
            Smart Digital Wings is a premier website development company in Meerut. We’re in the business of awesome web development because we rely on proven, modern technologies to build meaningful projects.
          </p>
          <a
            href="#contact"
            className="btn btn-primary btn-lg mt-3 px-4"
            style={{
              backgroundColor: '#0047FF',
              borderColor: '#0047FF',
              fontWeight: '600',
              borderRadius: '8px',
            }}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* SECTION 2 – New Layout (Text Left, Image Right) */}
      <section className="row align-items-center mt-5 pt-5">
        <div className="col-md-6 order-2 order-md-1">
          <h2 className="fw-light">
            Web Development <strong>Company In </strong>
            <span style={{ color: '#FF6A00' }}>Meerut</span>
          </h2>
          <p className="text-muted fs-5">Take your business online with an attractive website</p>
          <p>
            Be it a startup, enterprise or large-scale organization, our strategy is the same –
            to understand how users will interact with your product and work on it to maximize
            user engagement and satisfaction. With over 6 years of <strong>experience in offering custom web development services for clients around the world</strong>,
            we’ve fulfilled over 55 projects spanning multiple industries and business domains including
            healthcare, education, eCommerce, finance, media, entertainment, travel and automotive and more.
          </p>
          <a
            href="#contact"
            className="btn btn-warning btn-lg mt-4 px-4 text-white"
            style={{
              backgroundColor: '#FF6A00',
              borderColor: '#FF6A00',
              fontWeight: '600',
              borderRadius: '8px',
            }}
          >
            Hire Us
          </a>
        </div>
        <div className="col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img src={DevImage} alt="Web Development Server" className="img-fluid" />
        </div>
      </section>

      {/* SECTION 3 – New Section for Uploaded Image */}
      <section className="row align-items-center mt-5 pt-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={DevImage} alt="Web Development Extra" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-light">Website Development <strong>Meerut</strong></h2>
          <p className="text-muted fs-5">
            Smart Digital Wings is one of the best online web development companies in Meerut.
          </p>
          <p>
            No matter if you want web development services in Meerut or anywhere in India, just connect with us via our contact form or call us at <strong>+91-7017281826</strong>.
            One of our experts will guide you with the best strategy and suggest the most suitable development packages.
          </p>
          <p>
            Along with websites, we also provide digital marketing services to help your business grow faster.
          </p>
          <a
            href="#contact"
            className="btn btn-primary btn-lg mt-3 px-4"
            style={{
              backgroundColor: '#0047FF',
              borderColor: '#0047FF',
              fontWeight: '600',
              borderRadius: '8px',
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* SECTION 4 – FAQs Section */}
      <section className="row align-items-center mt-5 pt-5 justify-content-center">
        <div className="col-md-6 order-2 order-md-1">
          <h2 className="fw-light">
            Website Development <strong>Services </strong>
            <span style={{ color: '#FF6A00' }}>FAQs</span>
          </h2>
          <p className="text-muted fs-5 mb-4">Something knows About Website Development</p>

          <div className="mb-7 p-4 rounded" style={{ backgroundColor: '#397eff', color: '#fff' }}>
            <h5 className="fw-bold">What domain name should I choose?</h5>
            <p>
              The decision of domain name depends on how you plan to use it. As a rule,
              it makes sense to choose one that is easy to pronounce and spell if you
              will be telling people about it over the phone. Most importantly, you
              should choose a name that is memorable and not confusing.
            </p>
          </div>

          <div className="mb-2 p-3 rounded fw-semibold"
            onClick={() => toggleItem(1)}
            style={{
              marginTop: '20px',
              padding: '20px',
              borderRadius: '5px',
              backgroundColor: openItem === 1 ? '#397eff' : '#f8f9fa',
              color: openItem === 1 ? '#fff' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <h6>How long will it take for my website to be designed?
              {openItem === 1 && (
                <p style={{ marginTop: '10px', fontWeight: 'normal' }}>
                  The time depends on the complexity of your website.
                  A simple website may take 1-2 weeks, while more complex designs
                  may take 3–4 weeks or more.
                </p>
              )}
            </h6>
          </div>

          <div className="mb-2 p-3 rounded fw-semibold"
            onClick={() => toggleItem(2)}
            style={{
              marginTop: '20px',
              padding: '20px',
              borderRadius: '5px',
              backgroundColor: openItem === 2 ? '#397eff' : '#f8f9fa',
              color: openItem === 2 ? '#fff' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <h6>Will we have to have a meeting to discuss the website design?
              {openItem === 2 && (
                <p style={{ marginTop: '10px', fontWeight: 'normal' }}>
                  The time depends on the complexity of your website.
                  A simple website may take 1-2 weeks, while more complex designs
                  may take 3–4 weeks or more.
                </p>
              )}
            </h6>
          </div>
        </div>
      </section>

      {/* SECTION 5 – Get A Quote Section with Background Image */}
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${Meeting})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          position: 'relative',
          width: '100%',
          height: '60vh'
        }}
      >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '40px', borderRadius: '12px' }}>
          <h3 className="fw-light mb-2">Get A Quote</h3>
          <h1 className="fw-bold display-4 mb-4">Free Consultations</h1>
          <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill">
            Request A Quote
          </button>
        </div>
      </section>

      {/* SECTION 6 – Icons Row */}
      <section className="container py-5" style={{ backgroundColor: "#f3f7fc" }}>
        <div className="row justify-content-center align-items-center text-center g-4">
          {[...Array(6)].map((_, i) => (
            <div className="col-4 col-sm-2" key={i}>
              <img
                src={DevImage}
                alt={`Tech ${i}`}
                className="img-fluid rounded-circle"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default WebDevIntroSection;
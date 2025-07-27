import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DevImage from '../../assets/images/webDev.png';
import devlogo from '../../assets/images/devlogo.jpg';
import devlogo2 from '../../assets/images/devlogo2.jpg';
import './Style.css';

function WebDevIntroSection() {
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="container-fluid p-0">
      {/* ✅ Section 1 */}
      <div className="row align-items-center p-5" data-aos="fade-right">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={DevImage} alt="Web Development" className="img-fluid" />
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
            Best Website Development Company Meerut
          </h5>
          <p>
            We think that every business is different and should have a website
            that shows that. Our skilled team of designers works closely with
            you to learn about your brand, your audience, and your business
            goals.
          </p>
          <p>
            We ensure a solid user experience that delivers higher engagement
            and conversion. Smart Digital Wings is a premier website development
            company in Meerut.
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
            Web Development <strong>Company In </strong>
            <span className="text-warning">Meerut</span>
          </h2>
          <p className="text-muted fs-5">
            Take your business online with an attractive website
          </p>
          <p>
            Our website design theory is based on user experience. We emphasize 
            easy navigation, clear calls to action, and smooth user journeys. 
            By focusing on functionality and accessibility, we ensure your website 
            engages and converts visitors.
          </p>
          <p>
            In today's mobile-focused world, responsive design is essential. 
            Our expert developers create websites optimized for all devices.
          </p>
          <a
            href="#contact"
            className="btn btn-warning text-white px-4 mt-3 rounded-3"
          >
            Hire Us
          </a>
        </div>
        <div className="col-md-6 order-1 order-md-2 text-center">
          <img
            src={devlogo}
            alt="Web Development Server"
            className="img-fluid"
          />
        </div>
      </section>

      {/* ✅ Section 3 */}
      <section className="row align-items-center p-5" data-aos="fade-right">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={devlogo2}
            alt="Web Development Extra"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>
            Website Development <strong>Meerut</strong>
          </h2>
          <p className="text-muted">
            Smart Digital Wings is one of the best web development companies in
            Meerut.
          </p>
          <p>
            Get in touch via our contact form or call{" "}
            <strong>+91-9310891024</strong>. We'll guide you with the best
            strategy for your online presence.
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
            Website Development <strong>Services </strong>
            <span className="text-warning">FAQs</span>
          </h2>
          <p className="text-muted fs-5">
            Things you should know about website development
          </p>

          {/* Fixed answer block */}
          <div className="bg-primary text-white p-4 rounded mb-3">
            <h5>What domain name should I choose?</h5>
            <p>
              Choose a name that's easy to spell, pronounce, and memorable.
              Avoid confusing spellings and keep it relevant to your business.
            </p>
          </div>

          {/* FAQ List */}
          {[1, 2, 3, 4].map((id) => {
            const questions = {
              1: 'How long will it take to develop my website?',
              2: 'Will we need regular meetings during the development process?',
              3: 'Do you provide post-launch support?',
              4: 'Can I update the website content myself?',
            };

            const answers = {
              1: 'The timeline depends on website complexity. Simple websites take 2-4 weeks, while complex e-commerce sites may take 8-12 weeks.',
              2: 'We keep communication smooth via email, Zoom, and project management tools. Regular meetings can be scheduled based on your preference.',
              3: 'Yes, we offer maintenance packages that include updates, security monitoring, and technical support.',
              4: 'Absolutely! We provide CMS training and build websites with user-friendly content management systems.',
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
                    <span className="fs-5">-</span>
                  ) : (
                    <span className="fs-5">+</span>
                  )}
                </div>
                {openItem === id && <p className="mt-2">{answers[id]}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ Section 5 – Get A Quote */}
      <section className="quote-banner d-flex justify-content-center align-items-center text-center" data-aos="zoom-in">
        <div className="content">
          <h1 className="mb-3 text-white">Get A Quote</h1>
          <h2 className="mb-4 text-white">Free Consultations</h2>
          <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill">
            Request A Quote
          </button>
        </div>
      </section>

      {/* ✅ Section 6 – Technologies Used */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="mb-4">
            <strong>Technologies </strong>We Use
          </h2>
          <p className="text-muted mb-5">
            We build responsive, secure websites using modern tech stacks.
          </p>
          <div className="row g-4">
            {[
              { name: 'React', logo: 'https://img.icons8.com/color/96/react-native.png' },
              { name: 'Angular', logo: 'https://img.icons8.com/color/96/angularjs.png' },
              { name: 'Node.js', logo: 'https://img.icons8.com/color/96/nodejs.png' },
              { name: 'PHP', logo: 'https://img.icons8.com/offices/96/php-logo.png' },
              { name: 'WordPress', logo: 'https://img.icons8.com/color/96/wordpress.png' },
              { name: 'MongoDB', logo: 'https://img.icons8.com/color/96/mongodb.png' },
            ].map((tech, idx) => (
              <div className="col-6 col-md-2 text-center" key={idx}>
                <img src={tech.logo} alt={tech.name} className="img-fluid mb-2" style={{ height: 64 }} />
                <h6 className="mt-2">{tech.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Section 7 – Why Choose Us */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="mb-4">
            Why <strong>Choose Us</strong>
          </h2>
          <div className="row g-4">
            {[
              {
                icon: '🚀',
                title: 'Fast Loading Sites',
                desc: 'We optimize websites for maximum speed and performance.',
              },
              {
                icon: '📱',
                title: 'Mobile-First Design',
                desc: 'All our websites are fully responsive on all devices.',
              },
              {
                icon: '🔒',
                title: 'Secure & Reliable',
                desc: 'We implement top security practices to protect your site.',
              },
              {
                icon: '📈',
                title: 'SEO Optimized',
                desc: 'Websites built with search engine visibility in mind.',
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

      {/* ✅ Section 8 – Testimonials */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="row justify-content-center">
            {[
              {
                name: 'Rahul Verma',
                text: 'Smart Digital Wings transformed our online presence with a stunning e-commerce website. Our sales increased by 40% in just 3 months!',
              },
              {
                name: 'Neha Sharma',
                text: 'Their team built our corporate website with exceptional attention to detail. The user experience is seamless across all devices.',
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
  );
}

export default WebDevIntroSection;
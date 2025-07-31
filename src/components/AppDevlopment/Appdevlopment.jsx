import React, { useState, useRef, useEffect } from 'react';
import HomeSection2 from '../HeroSection/HomeSection2.jsx';
import DevImage from '../../assets/images/webDev.png';
import devlogo from '../../assets/images/devlogo.jpg';
import devlogo2 from '../../assets/images/devlogo2.jpg';
import WebDev from '../../assets/images/Logoweb3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Appdevlopment.css';
import { categories } from '../../assets/images/images.js';
import { FaPlus, FaMinus } from 'react-icons/fa';

function AppDevelopment({ category, setCategory }) {
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
      {/* ✅ Hero Section */}
      <HomeSection2
        heading="App Development in Meerut"
        typewriterWords={["iOS Apps", "Android Apps", "Cross-platform", "UI/UX"]}
        description="Grow your business with our expert app development services in Meerut."
        image={WebDev}
        btnText="Request A Quote"
        btnLink="#contact"
      />

      <div className="container-fluid p-0">
        {/* ✅ Section 1 */}
        <div className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={DevImage} alt="App Development" className="img-fluid" />
            <div className="bg-warning text-white p-4 mt-4 fw-bold rounded">
              “We don't just build apps, we build apps that users love”
            </div>
          </div>

          <div className="col-md-6">
            <h2>
              <strong>Company In </strong>
              <span className="text-warning">Meerut</span>
            </h2>
            <p className="text-muted">Hire us today! Get a free quote.</p>
            <h5 className="fw-bold mt-4 mb-3">
              Best App Development Company Meerut
            </h5>
            <p>
              Looking for a high-performing mobile app? You are at the right place! We deliver sleek, fast, and scalable apps that your users will love.
            </p>
            <p>
              We ensure a seamless user experience that drives higher engagement. Smart Digital Wings is a premier app development company in Meerut.
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
              App Development <strong>Company In </strong>
              <span className="text-warning">Meerut</span>
            </h2>
            <p className="text-muted fs-5">Launch your app idea with powerful mobile solutions</p>
            <p>
              With 6+ years of experience, we’ve delivered 55+ mobile apps across industries like healthcare, education, eCommerce, and more.
            </p>
            <a href="#contact" className="btn btn-warning text-white px-4 mt-3 rounded-3">
              Hire Us
            </a>
          </div>
          <div className="col-md-6 order-1 order-md-2 text-center">
            <img src={devlogo} alt="App Development Server" className="img-fluid" />
          </div>
        </section>

        {/* ✅ Section 3 */}
        <section className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={devlogo2} alt="App Development Extra" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>App Development <strong>Meerut</strong></h2>
            <p className="text-muted">
              Smart Digital Wings is one of the best app development companies in Meerut.
            </p>
            <p>
              Get in touch via our contact form or call <strong>+91-9310891024</strong>. We’ll help you build an app that works.
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
              App Development <strong>Services </strong>
              <span className="text-warning">FAQs</span>
            </h2>
            <p className="text-muted fs-5">Things you should know about mobile app development</p>

            {/* Fixed answer block */}
            <div className="bg-primary text-white p-4 rounded mb-3">
              <h5>Which platform should I choose: Android or iOS?</h5>
              <p>It depends on your audience. We can help you build for both using cross-platform technologies.</p>
            </div>

            {/* FAQ List */}
            {[1, 2, 3, 4].map((id) => {
              const questions = {
                1: 'How long will it take to develop my mobile app?',
                2: 'Will we have to meet regularly during app development?',
                3: 'Do you provide post-launch support?',
                4: 'Can I update the app after it’s published?',
              };

              const answers = {
                1: 'The timeline depends on app features. Simple apps may take 2–4 weeks; complex apps can take 1–3 months.',
                2: 'We keep communication smooth via emails, Zoom, and project boards. Physical meetings are optional.',
                3: 'Yes, we offer maintenance, bug fixing, and feature enhancement after app launch.',
                4: 'Absolutely! We provide ongoing update support even after your app goes live.',
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
        <section className="quote-banner" data-aos="zoom-in">
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
              We build scalable and secure apps using the latest tech stacks.
            </p>
            <div className="row g-4">
              {[
                { name: 'React Native', logo: 'https://img.icons8.com/color/96/react-native.png' },
                { name: 'Flutter', logo: 'https://img.icons8.com/color/96/flutter.png' },
                { name: 'Kotlin', logo: 'https://img.icons8.com/color/96/kotlin.png' },
                { name: 'Swift', logo: 'https://img.icons8.com/color/96/swift.png' },
                { name: 'Firebase', logo: 'https://img.icons8.com/color/96/firebase.png' },
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
                  icon: '🌟',
                  title: 'Experienced Developers',
                  desc: 'Our team brings years of mobile app development expertise.',
                },
                {
                  icon: '⚡',
                  title: 'Lightning Fast Delivery',
                  desc: 'We deliver projects on-time with clear milestones.',
                },
                {
                  icon: '🔒',
                  title: 'Secure Apps',
                  desc: 'Your data is protected with top-level security practices.',
                },
                {
                  icon: '🤝',
                  title: 'Full Support',
                  desc: 'We provide ongoing support even after launch.',
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
                  name: 'Ankit Sharma',
                  text: 'Smart Digital Wings delivered a stunning mobile app for our eCommerce platform. Their team was highly responsive and supportive.',
                },
                {
                  name: 'Pooja Verma',
                  text: 'They built our healthcare appointment app in record time. Highly recommended!',
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

export default AppDevelopment;

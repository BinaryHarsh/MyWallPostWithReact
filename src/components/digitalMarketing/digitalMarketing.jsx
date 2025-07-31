import React, { useState, useRef, useEffect } from 'react';
import HomeSection2 from '../HeroSection/HomeSection2.jsx';
import DevImage from '../../assets/images/webDev.png';
import devlogo from '../../assets/images/devlogo.jpg';
import devlogo2 from '../../assets/images/devlogo2.jpg';
import WebDev from '../../assets/images/Logoweb3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

function DigitalMarketing() {
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
        heading="Digital Marketing in Meerut"
        typewriterWords={["SEO Services", "PPC Campaigns", "Social Media", "Content Marketing"]}
        description="Boost your online presence with expert digital marketing strategies"
        image={WebDev}
        btnText="Request A Quote"
        btnLink="#contact"
      />

      <div className="container-fluid p-0">
        {/* ✅ Section 1 */}
        <div className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={DevImage} alt="Digital Marketing" className="img-fluid" />
            <div className="bg-warning text-white p-4 mt-4 fw-bold rounded">
              "We don't just run ads, we grow your business online"
            </div>
          </div>

          <div className="col-md-6">
            <h2>
              <strong>Digital Marketing </strong>
              <span className="text-warning">Experts</span>
            </h2>
            <p className="text-muted">Get visible online! Request a free audit.</p>
            <h5 className="fw-bold mt-4 mb-3">
              Best Digital Marketing Company in Meerut
            </h5>
            <p>
              Looking to increase your online visibility and conversions? We deliver data-driven marketing strategies that deliver measurable results.
            </p>
            <p>
              Our comprehensive approach covers SEO, PPC, social media, and content marketing to maximize your ROI.
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
              Results-Driven <strong>Marketing </strong>
              <span className="text-warning">Strategies</span>
            </h2>
            <p className="text-muted fs-5">Proven techniques to grow your business</p>
            <p>
              With our 6+ years of experience, we've helped businesses across industries increase their online visibility, leads, and sales.
            </p>
            <a href="#contact" className="btn btn-warning text-white px-4 mt-3 rounded-3">
              Our Services
            </a>
          </div>
          <div className="col-md-6 order-1 order-md-2 text-center">
            <img src={devlogo} alt="Digital Marketing Services" className="img-fluid" />
          </div>
        </section>

        {/* ✅ Section 3 */}
        <section className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={devlogo2} alt="Marketing Analytics" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Data-Driven <strong>Approach</strong></h2>
            <p className="text-muted">
              We measure everything to optimize your campaigns
            </p>
            <p>
              Get in touch via our contact form or call <strong>+91-9310891024</strong>. We'll analyze your current marketing performance and suggest improvements.
            </p>
            <a href="#contact" className="btn btn-primary px-4 mt-3 rounded-3">
              Free Consultation
            </a>
          </div>
        </section>

        {/* ✅ Section 4 – Digital Marketing FAQs */}
        <section className="row justify-content-center align-items-start p-5 bg-light" data-aos="fade-up">
          <div className="col-md-8">
            <h2>
              Digital Marketing <strong>FAQs</strong>
              <span className="text-warning"></span>
            </h2>
            <p className="text-muted fs-5">Answers to common digital marketing questions</p>

            {/* Fixed answer block */}
            <div className="bg-primary text-white p-4 rounded mb-3">
              <h5>How long does digital marketing take to show results?</h5>
              <p>PPC campaigns can show immediate results, while SEO typically takes 3-6 months. Social media marketing shows gradual growth over weeks/months.</p>
            </div>

            {/* FAQ List */}
            {[
              {
                id: 1,
                question: "What's the difference between SEO and PPC?",
                answer: "SEO (Search Engine Optimization) is organic traffic growth through content and technical optimizations. PPC (Pay-Per-Click) is paid advertising that delivers immediate, targeted traffic."
              },
              {
                id: 2,
                question: "How much should I budget for digital marketing?",
                answer: "Budgets vary based on goals and competition. Small businesses typically invest ₹15,000-₹50,000/month, while larger campaigns can be ₹1,00,000+/month."
              },
              {
                id: 3,
                question: "Which social platforms should I focus on?",
                answer: "It depends on your audience. B2B performs well on LinkedIn, B2C on Facebook/Instagram, younger audiences on Instagram/TikTok, professionals on Twitter."
              },
              {
                id: 4,
                question: "How do you measure campaign success?",
                answer: "We track KPIs like website traffic, conversion rates, cost per lead, ROI, engagement metrics, and sales attribution across all channels."
              }
            ].map((item) => (
              <div
                key={item.id}
                className={`p-3 mb-3 rounded ${openItem === item.id ? 'bg-primary text-white' : 'bg-white text-dark'}`}
                onClick={() => toggleItem(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">{item.question}</h6>
                  {openItem === item.id ? (
                    <FaMinus className="fs-5" />
                  ) : (
                    <FaPlus className="fs-5" />
                  )}
                </div>
                {openItem === item.id && <p className="mt-2">{item.answer}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Section 5 – Get A Quote */}
        <section className="quote-banner" data-aos="zoom-in">
          <div className="content">
            <h1 className="mb-3 text-white">Get A Quote</h1>
            <h2 className="mb-4 text-white">Free Marketing Audit</h2>
            <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill">
              Request A Quote
            </button>
          </div>
        </section>

        {/* ✅ Section 7 – Digital Marketing Technologies */}
        <section className="py-5 bg-white" data-aos="fade-up">
          <div className="container text-center">
            <h2 className="mb-4">
              <strong>Marketing Technology</strong> Stack
            </h2>
            <p className="text-muted mb-5">
              We use these powerful tools to drive your marketing success
            </p>
            <div className="row g-4">
              {[
                { 
                  name: 'Google Ads', 
                  logo: 'https://img.icons8.com/color/96/google-ads.png',
                  type: 'PPC Advertising'
                },
                { 
                  name: 'Google Analytics', 
                  logo: 'https://img.icons8.com/color/96/google-analytics.png',
                  type: 'Web Analytics'
                },
                { 
                  name: 'Meta Business', 
                  logo: 'https://img.icons8.com/color/96/facebook.png',
                  type: 'Social Media Ads'
                },
                { 
                  name: 'SEMrush', 
                  logo: 'https://img.icons8.com/color/96/semrush.png',
                  type: 'SEO Tools'
                },
                { 
                  name: 'Mailchimp', 
                  logo: 'https://img.icons8.com/color/96/mailchimp.png',
                  type: 'Email Marketing'
                },
                { 
                  name: 'HubSpot', 
                  logo: 'https://img.icons8.com/color/96/hubspot.png',
                  type: 'Marketing Automation'
                },
                { 
                  name: 'Canva', 
                  logo: 'https://img.icons8.com/color/96/canva.png',
                  type: 'Creative Design'
                },
                { 
                  name: 'Hootsuite', 
                  logo: 'https://img.icons8.com/color/96/hootsuite.png',
                  type: 'Social Media Management'
                }
              ].map((tech, idx) => (
                <div className="col-6 col-md-3 text-center" key={idx}>
                  <div className="p-3 h-100">
                    <img src={tech.logo} alt={tech.name} className="img-fluid mb-2" style={{ height: 64 }} />
                    <h6 className="mt-2">{tech.name}</h6>
                    <small className="text-muted">{tech.type}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Section 8 – Why Choose Us */}
        <section className="py-5 bg-light" data-aos="fade-up">
          <div className="container text-center">
            <h2 className="mb-4">
              Why <strong>Choose Our</strong> Services
            </h2>
            <div className="row g-4">
              {[
                {
                  icon: '📊',
                  title: 'Data-Driven',
                  desc: 'All decisions based on analytics and performance metrics',
                },
                {
                  icon: '🎯',
                  title: 'Targeted',
                  desc: 'Precisely reach your ideal customers',
                },
                {
                  icon: '📈',
                  title: 'ROI-Focused',
                  desc: 'Maximize your return on marketing investment',
                },
                {
                  icon: '🔄',
                  title: 'Adaptive',
                  desc: 'Continuous optimization based on results',
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
            <h2 className="text-center mb-4">Client Success Stories</h2>
            <div className="row justify-content-center">
              {[
                {
                  name: 'Rahul Gupta (Ecommerce)',
                  text: 'Our online sales increased by 220% in 6 months through their PPC and SEO strategies. The ROI has been phenomenal!',
                },
                {
                  name: 'Neha Sharma (Healthcare)',
                  text: 'They tripled our patient inquiries through targeted Facebook ads and content marketing. Highly recommended!',
                },
                {
                  name: 'Amit Patel (Education)',
                  text: 'Our course enrollments grew by 180% after implementing their digital marketing plan. The team is incredibly knowledgeable.',
                }
              ].map((review, i) => (
                <div className="col-md-4 m-2 p-3 border rounded shadow-sm" key={i}>
                  <p className="fst-italic">"{review.text}"</p>
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

export default DigitalMarketing;
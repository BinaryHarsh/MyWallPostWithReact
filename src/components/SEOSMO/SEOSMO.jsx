import React, { useState, useRef, useEffect } from 'react';
import HomeSection2 from '../HeroSection/HomeSection2.jsx';
import DevImage from '../../assets/images/webDev1.jpg';
import devlogo from '../../assets/images/devlogo3.jpg';
import devlogo2 from '../../assets/images/devlogo4.jpg';
import WebDev from '../../assets/images/Logoweb4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import { categories } from '../../assets/images/images.js';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Seosmo({ category, setCategory }) {
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
        heading="SEO/SMO Services in Meerut"
        typewriterWords={["SEO Optimization", "Social Media Marketing", "Content Marketing", "PPC Campaigns"]}
        description="Boost your online presence with our expert SEO and SMO services in Meerut."
        image={WebDev}
        btnText="Request A Quote"
        btnLink="#contact"
      />

      <div className="container-fluid p-0">
        {/* ✅ Section 1 */}
        <div className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={DevImage} alt="SEO/SMO Services" className="img-fluid" />
            <div className="bg-warning text-white p-4 mt-4 fw-bold rounded">
              "We don't just optimize websites, we grow your online business"
            </div>
          </div>

          <div className="col-md-6">
            <h2>
              <strong>Digital Marketing </strong>
              <span className="text-warning">Company</span>
            </h2>
            <p className="text-muted">Get visible online! Request a free audit.</p>
            <h5 className="fw-bold mt-4 mb-3">
              Best SEO/SMO Company in Meerut
            </h5>
            <p>
              Looking to rank higher on Google and social media? You're at the right place! We deliver comprehensive digital marketing strategies that drive real results.
            </p>
            <p>
              We ensure maximum visibility and engagement across all platforms. Smart Digital Wings is a premier SEO/SMO company in Meerut.
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
              Digital Marketing <strong>Company In </strong>
              <span className="text-warning">Meerut</span>
            </h2>
            <p className="text-muted fs-5">Grow your online presence with our expert strategies</p>
            <p>
              With 6+ years of experience, we've helped 100+ businesses improve their search rankings and social media engagement across industries.
            </p>
            <a href="#contact" className="btn btn-warning text-white px-4 mt-3 rounded-3">
              Hire Us
            </a>
          </div>
          <div className="col-md-6 order-1 order-md-2 text-center">
            <img src={devlogo} alt="Digital Marketing Services" className="img-fluid" />
          </div>
        </section>

        {/* ✅ Section 3 */}
        <section className="row align-items-center p-5" data-aos="fade-right">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={devlogo2} alt="SEO/SMO Services" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>SEO/SMO <strong>Services Meerut</strong></h2>
            <p className="text-muted">
              Smart Digital Wings is one of the best digital marketing companies in Meerut.
            </p>
            <p>
              Get in touch via our contact form or call <strong>+91-9310891024</strong>. We'll analyze your current online presence and suggest improvements.
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
              SEO/SMO <strong>Services </strong>
              <span className="text-warning">FAQs</span>
            </h2>
            <p className="text-muted fs-5">Common questions about our digital marketing services</p>

            {/* Fixed answer block */}
            <div className="bg-primary text-white p-4 rounded mb-3">
              <h5>How long does it take to see results from SEO?</h5>
              <p>SEO is a long-term strategy. Typically, you'll start seeing improvements in 3-6 months, but significant results may take 6-12 months of consistent effort.</p>
            </div>

            {/* FAQ List */}
            {[1, 2, 3, 4].map((id) => {
              const questions = {
                1: "What's the difference between SEO and SMO?",
                2: "How often should we post on social media?",
                3: "Do you provide content creation services?",
                4: "Can you help with Google Ads campaigns?"
              };

              const answers = {
                1: "SEO (Search Engine Optimization) focuses on improving your website's visibility in search engines, while SMO (Social Media Optimization) focuses on increasing your presence and engagement on social media platforms.",
                2: "The ideal frequency depends on your platform and audience. Generally, we recommend 3-5 posts per week for Facebook/Instagram, and 1-2 posts per day for Twitter.",
                3: "Yes, we offer complete content marketing services including blog writing, social media content, infographics, and video content creation.",
                4: "Absolutely! We manage complete PPC campaigns including Google Ads, Facebook Ads, and other paid advertising platforms to drive targeted traffic to your business."
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
            <h2 className="mb-4 text-white">Free SEO Audit</h2>
            <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill">
              Request A Quote
            </button>
          </div>
        </section>

        {/* ✅ Section 7 – Technologies Used */}
        <section className="py-5 bg-white" data-aos="fade-up">
          <div className="container text-center">
            <h2 className="mb-4">
              <strong>Tools & Platforms </strong>We Use
            </h2>
            <p className="text-muted mb-5">
              We use industry-leading tools to maximize your online visibility.
            </p>
            <div className="row g-4">
              {[
                { name: 'Google Analytics', logo: 'https://img.icons8.com/color/96/google-analytics.png' },
                { name: 'SEMrush', logo: 'https://c.semrush.com/auto/uploads/logo/5f98869f1b2a7d0f3a3b8d9d/semrush-logo-vector.svg' },
                { name: 'Ahrefs', logo: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-ahrefs-a-digital-marketing-software-company-known-for-its-backlink-analysis-tools-logo-shadow-tal-revivo.png' },
                { name: 'Google Ads', logo: 'https://img.icons8.com/color/96/google-ads.png' },
                { name: 'Facebook Ads', logo: 'https://img.icons8.com/color/96/facebook-new.png' },
                { name: 'Mailchimp', logo: 'https://img.icons8.com/color/96/mailchimp.png' },
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
                  icon: '📈',
                  title: 'Proven Results',
                  desc: 'We have a track record of improving search rankings and social engagement.',
                },
                {
                  icon: '🔍',
                  title: 'Transparent Reporting',
                  desc: 'Regular reports showing exactly how your campaigns are performing.',
                },
                {
                  icon: '🎯',
                  title: 'Targeted Strategies',
                  desc: 'Customized approaches based on your specific business goals.',
                },
                {
                  icon: '💡',
                  title: 'Holistic Approach',
                  desc: 'We integrate SEO, SMO, and content marketing for maximum impact.',
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
                  name: 'Rahul Gupta',
                  text: 'Our organic traffic increased by 300% within 6 months of working with Smart Digital Wings. Their SEO strategies are truly effective.',
                },
                {
                  name: 'Neha Sharma',
                  text: 'The social media campaigns they created helped us triple our Instagram followers and double our website conversions in just 3 months!',
                },
              ].map((review, i) => (
                <div className="col-md-5 m-3 p-4 border rounded shadow-sm" key={i}>
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

export default Seosmo;
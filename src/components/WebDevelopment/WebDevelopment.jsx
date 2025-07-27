import React, { useState } from 'react';
import HomeSection2 from '../HeroSection/HomeSection2';
import WebIntroSection from '../WebInfo/WebIntroSection';
import WebDev from '../../assets/images/LogoWeb2.png';

function WebDevelopment() {
  const [category, setCategory] = useState('All');

  return (
    <div className="container-fluid px-0">
      {/* New Typewriter-based Hero Section */}
      <HomeSection2
        heading="Website Development in Meerut for"
        typewriterWords={['Startups', 'Businesses', 'Enterprises', 'E-Commerce']}
        description="We build stunning, fast, and SEO-optimized websites that help you grow your business online."
        image={WebDev}
        btnText="Contact Us"
        btnLink="/contact"
      />

      {/* Web Services Info / Filter Section */}
      <div className="container py-5">
        <WebIntroSection category={category} setCategory={setCategory} />
      </div>
    </div>
  );
}

export default WebDevelopment;

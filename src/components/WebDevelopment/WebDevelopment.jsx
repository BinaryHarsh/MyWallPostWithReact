import React from 'react'
import HomeSection2 from '../HeroSection/HomeSection2'
import WebIntroSection from '../WebInfo/WebIntroSection';
import WebDev from '../../assets/images/LogoWeb2.png'
import { useState } from 'react';
function WebDevelopment  () {
   const [category, setCategory] = useState('All');
  return (
    <div className='container-fluid px-5 py-5'>
        <HomeSection2
        heading="Website Development in Meerut"
        breadcrumbText={
          <>
            <span className="text-black">Home</span> &nbsp;|&nbsp;
            <span className="text-warning font-1xl fw-semibold">
              Web Development Company in Meerut
            </span>
            <span className="text-warning fw-semibold">
              {' '}
              || Website Development Meerut
            </span>
          </>
        }
        bgImage={WebDev}
      />
        <WebIntroSection category={category} setCategory={setCategory}/>
      
    </div>
  )
}

export default WebDevelopment

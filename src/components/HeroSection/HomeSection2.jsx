import React from 'react'

import WebDev from '../../assets/images/WebDev.png';

function HomeSection2  ()  {
       
  return (
    <div className="breadcrumb-banner d-flex align-items-center justify-content-center text-center text-info"
      style={{
       backgroundImage: `url(${WebDev})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
width: '100%',

        position: 'relative'
      }}>
      <div className="container">
        <h1 className="fw-bold display-5">Website Development in Meerut</h1>
        <p className="breadcrumb-text mt-3">
          <span className="text-white">Home</span> &nbsp;|&nbsp; 
          <span className="text-warning fw-semibold"> Web Development Company in Meerut </span> 
          <span className="text-warning fw-semibold">|| Website Development Meerut</span>
        </p>
      </div>
    </div>
  )
}

export default HomeSection2

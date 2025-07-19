// import React from 'react'

// import WebDev from '../../assets/images/LogoWeb2.png';

// function HomeSection2  ()  {
       
//   return (
//     <div className="breadcrumb-banner  d-flex align-items-center justify-content-center  text-center text-info"
//       style={{
//        backgroundImage: `url(${WebDev})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: "700px",
//         width: '100%',
//         margin:"0px",
//         paddingLeft: "0px",
//         position: 'relative',
//         display:'flex'
//       }}>
//       <div className="container">
//         <h1 className="fw-bold text-black display-5">Website Development in Meerut</h1>
//         <p className="breadcrumb-text mt-3">
//           <span className="text-black">Home</span> &nbsp;|&nbsp; 
//           <span className="text-warning font-1xl fw-semibold"> Web Development Company in Meerut </span> 
//           <span className="text-warning fw-semibold">|| Website Development Meerut</span>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default HomeSection2

function HomeSection2({ heading, breadcrumbText, bgImage }) {
  return (
    <div
      className="breadcrumb-banner d-flex align-items-center justify-content-center text-center text-info"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '700px',
        width: '100%',
        margin: '0px',
        paddingLeft: '0px',
        position: 'relative',
        display: 'flex',
      }}
    >
      <div className="container">
        <h1 className="fw-bold text-black display-5">{heading}</h1>
        <p className="breadcrumb-text mt-3">{breadcrumbText}</p>
      </div>
    </div>
  );
}
export default HomeSection2
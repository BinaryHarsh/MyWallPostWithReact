// // import React from 'react'

// // import WebDev from '../../assets/images/LogoWeb2.png';

// // function HomeSection2  ()  {
       
// //   return (
// //     <div className="breadcrumb-banner  d-flex align-items-center justify-content-center  text-center text-info"
// //       style={{
// //        backgroundImage: `url(${WebDev})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         height: "700px",
// //         width: '100%',
// //         margin:"0px",
// //         paddingLeft: "0px",
// //         position: 'relative',
// //         display:'flex'
// //       }}>
// //       <div className="container">
// //         <h1 className="fw-bold text-black display-5">Website Development in Meerut</h1>
// //         <p className="breadcrumb-text mt-3">
// //           <span className="text-black">Home</span> &nbsp;|&nbsp; 
// //           <span className="text-warning font-1xl fw-semibold"> Web Development Company in Meerut </span> 
// //           <span className="text-warning fw-semibold">|| Website Development Meerut</span>
// //         </p>
// //       </div>
// //     </div>
// //   )
// // }

// // export default HomeSection2

// function HomeSection2({ heading, breadcrumbText, bgImage }) {
//   return (
//     <div
//       className="breadcrumb-banner d-flex align-items-center justify-content-center text-center text-info"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '700px',
//         width: '100%',
//         margin: '0px',
//         paddingLeft: '0px',
//         position: 'relative',
//         display: 'flex',
//       }}
//     >
//       <div className="container">
//         <h1 className="fw-bold text-black display-5">{heading}</h1>
//         <p className="breadcrumb-text mt-3">{breadcrumbText}</p>
//       </div>
//     </div>
//   );
// }
// export default HomeSection2

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomeSection2.css'; // optional for custom styles

// function HomeSection2({ heading, breadcrumbText, bgImage, btnText, btnLink }) {
//   return (
//     <section
//       className="home-section2 d-flex align-items-center justify-content-center text-center text-info"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '700px',
//         width: '100%',
//         margin: 0,
//         padding: 0,
//         position: 'relative',
//         display: 'flex',
//       }}
//     >
//       <div className="container">
//         <h1 className="fw-bold text-black display-5">{heading}</h1>
//         <p className="breadcrumb-text mt-3">{breadcrumbText}</p>
        
//         {btnText && btnLink && (
//           <Link to={btnLink} className="btn btn-warning mt-4 px-4 py-2 fw-semibold">
//             {btnText}
//           </Link>
//         )}
//       </div>
//     </section>
//   );
// }

// export default HomeSection2;
import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import './HomeSection2.css'; // Optional CSS file if needed

function HomeSection2({
  heading = '',
  typewriterWords = [],
  description = '',
  image,
  btnText,
  btnLink,
}) {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6">
            <h1 className="text-primary mb-3">
              {heading}{' '}
              {typewriterWords.length > 0 && (
                <span className="typewriter-text text-dark">
                  <Typewriter
                    words={typewriterWords}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              )}
            </h1>

            <p className="lead text-muted">{description}</p>

            {btnText && btnLink && (
              <Link to={btnLink} className="btn btn-primary btn-lg mt-3">
                {btnText}
              </Link>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src={image}
              alt="Hero"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection2;


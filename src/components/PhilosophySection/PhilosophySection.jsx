import React from 'react';
import { Link } from 'react-router-dom';
import conceptImg from '../../assets/images/Opi.jpg';      // replace with actual paths
import philosophyImg from '../../assets/images/Progress.jpg';
import workingImg from '../../assets/images/OIP.jpg';

function PhilosophySection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">

          {/* Our Philosophy */}
          <div className="col-md-4 p-4 bg-primary text-white position-relative">
            <img src={philosophyImg} alt="Philosophy" className="mb-3" style={{ height: 70 }} />
            <h4 className="fw-bold mb-3 text-uppercase">Our Philosophy</h4>
            <p>
              At MyWallPost, our customers are the most valuable assets.
              Our team first understands the exact requirements and then advises
              the best solutions to help their business grow.
            </p>
            <Link to="/about" className="btn btn-light mt-3 fw-bold px-4 py-2">
              <i className="bi bi-dot"></i> Get Started <i className="bi bi-dot"></i>
            </Link>
          </div>

          {/* Our Concept */}
          <div className="col-md-4 p-4 bg-light text-dark">
            <img src={conceptImg} alt="Concept" className="mb-3" style={{ height: 70 }} />
            <h4 className="fw-bold mb-3 text-uppercase">Our Concept</h4>
            <p>
              As an award-winning website designing company in Meerut, our concept lies
              in providing customers with cost-efficient websites that are easy to maintain and run.
            </p>
            <Link to="/about" className="btn btn-danger mt-3 fw-bold px-4 py-2">
              <i className="bi bi-dot"></i> Learn More <i className="bi bi-dot"></i>
            </Link>
          </div>

          {/* Working */}
          <div className="col-md-4 p-4 bg-primary text-white position-relative">
            <img src={workingImg} alt="Working" className="mb-3" style={{ height: 70 }} />
            <h4 className="fw-bold mb-3 text-uppercase">Working</h4>
            <p>
              At MyWallPost, we have a great work culture. Our team works
              in a friendly environment without hierarchy, helping everyone give their best.
            </p>
            <Link to="/about" className="btn btn-light mt-3 fw-bold px-4 py-2">
              <i className="bi bi-dot"></i> Get Started <i className="bi bi-dot"></i>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
 
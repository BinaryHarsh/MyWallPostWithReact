import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; // Adjust path as needed

function Footer() {
  return (
    <footer className="text-white pt-5" style={{ backgroundColor: '#020c30' }}>
      <div className="container">
        <div className="row pb-5 border-bottom border-secondary">
          {/* Logo & Description */}
          <div className="col-md-4 mb-4">
            <img src={logo} alt="Smart Digital Wings" style={{ height: 70 }} className="mb-3" />
            <p>
              We are the leading website designing and digital marketing company in Meerut. Hire Us Today!
              We give the wings to your business. Feel free to contact and get a quote for your business.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="btn btn-outline-light rounded-circle p-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle p-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/himanshu_sain____/" className="btn btn-outline-light rounded-circle p-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle p-2">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/website-designing" className="text-white text-decoration-none">Website Designing</Link></li>
              <li><Link to="/website-development" className="text-white text-decoration-none">Website Development</Link></li>
              <li><Link to="/website-maintenance" className="text-white text-decoration-none">Website Maintenance</Link></li>
              <li><Link to="/software-development" className="text-white text-decoration-none">Software Development</Link></li>
              <li><Link to="/mobile-app-development" className="text-white text-decoration-none">Mobile App.</Link></li>
              <li><Link to="/development" className="text-white text-decoration-none">Development</Link></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold invisible">Quick Links</h5>
            <ul className="list-unstyled pt-md-4 pt-0">
              <li><Link to="/digital-marketing" className="text-white text-decoration-none">Digital Marketing</Link></li>
              <li><Link to="/seo" className="text-white text-decoration-none">SEO/SEM</Link></li>
              <li><Link to="/smo" className="text-white text-decoration-none">SMO/SMM</Link></li>
              <li><Link to="/ppc" className="text-white text-decoration-none">Pay Per Click</Link></li>
              <li><Link to="/logo-designing" className="text-white text-decoration-none">Logo Designing</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <p>But must explain to you how this mistaken idea denouncing pleasure praising</p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="form-control rounded-0"
              />
              <button type="submit" className="btn rounded-0" style={{ backgroundColor: '#ff4d4f' }}>
                <i className="bi bi-send text-white"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="row text-center text-md-start pt-4">
          <div className="col-md-3 mb-3 d-flex align-items-center">
            <i className="bi bi-geo-alt-fill fs-4 me-2 text-primary"></i>
            <div>
              <strong>Address</strong><br />
              Meerut, Uttar Pradesh
            </div>
          </div>
          <div className="col-md-3 mb-3 d-flex align-items-center">
            <i className="bi bi-envelope-fill fs-4 me-2 text-primary"></i>
            <div>
              <strong>Email Us</strong><br />
              ht0257445@gmail.com
            </div>
          </div>
          <div className="col-md-3 mb-3 d-flex align-items-center">
            <i className="bi bi-telephone-fill fs-4 me-2 text-primary"></i>
            <div>
              <strong>Contact Us</strong><br />
              +91-9310891024
            </div>
          </div>
          <div className="col-md-3 mb-3 d-flex align-items-center">
            <i className="bi bi-clock-fill fs-4 me-2 text-primary"></i>
            <div>
              <strong>Opening Hour</strong><br />
              Mon – Sat, 10 am – 7 pm
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} Smart Digital Wings. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-lg-2 footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Smart Digital Wings" style={{ height: 70 }} className="mb-3" />
            </div>
            <p className="footer-about">
              We are the leading website designing and digital marketing company in Meerut. Hire Us Today!
              We give the wings to your business. Feel free to contact and get a quote for your business.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/himanshu_sain____/" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 footer-section">
            <h5>QUICK LINKS</h5>
            <ul className="footer-links">
              <li>
                <Link to="/website-designing">Website Designing</Link>
              </li>
              <li>
                <Link to="/website-development">Website Development</Link>
              </li>
              <li>
                <Link to="/website-maintenance">Website Maintenance</Link>
              </li>
              <li>
                <Link to="/software-development">Software Development</Link>
              </li>
              <li>
                <Link to="/mobile-app-development">Mobile App.</Link>
              </li>
              <li>
                <Link to="/development">Development</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 footer-section">
            <h5>SERVICES</h5>
            <ul className="footer-links">
              <li>
                <Link to="/digital-marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/seo">SEO/SEM</Link>
              </li>
              <li>
                <Link to="/smo">SMO/SMM</Link>
              </li>
              <li>
                <Link to="/ppc">Pay Per Click</Link>
              </li>
              <li>
                <Link to="/logo-designing">Logo Designing</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 footer-section">
            <h5>NEWSLETTER</h5>
            <p className="footer-about">
              But must explain to you how this mistaken idea denouncing pleasure praising
            </p>
            <div className="footer-newsletter">
              <input
                type="email"
                placeholder="Enter Email Address"
              />
              <button className="newsletter-btn">
                <i className="bi bi-send"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="contact-text">
              <strong>Address</strong>
              Meerut, Uttar Pradesh
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div className="contact-text">
              <strong>Email Us</strong>
              mywallposts01@gmail.com
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="contact-text">
              <strong>Contact Us</strong>
              +91-9675988914
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="bi bi-clock-fill"></i>
            </div>
            <div className="contact-text">
              <strong>Opening Hour</strong>
              Mon – Sat, 10 am – 7 pm
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookies">Cookie Policy</Link>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} MyWellPost . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
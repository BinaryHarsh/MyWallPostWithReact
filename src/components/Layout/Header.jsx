// src/components/Header/Header.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className=''>
      {/* Top bar with contact info and social icons */}
      <div className="top-bar bg-light py-2 ">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-info">
            <i className="bi bi-envelope me-2"></i>
            <a href="mailto:smartdigitalwings@gmail.com">smartdigitalwings@gmail.com</a>
            <span className="mx-3">|</span>
            <i className="bi bi-telephone me-2"></i>
            <a href="tel:+917017281826">+91-7017281826</a>
          </div>
          <div className="social-icons">
            <Link to="#" className="text-dark me-2"><i className="bi bi-facebook"></i></Link>
            <Link to="#" className="text-dark me-2"><i className="bi bi-instagram"></i></Link>
            <Link to="#" className="text-dark"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary   ">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="logo" height="40" className="me-2" />
            <strong>My Wall Post</strong>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    'nav-link' + (isActive ? ' active' : '')
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    'nav-link' + (isActive ? ' active' : '')
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <NavLink to="/services/web-development" className="dropdown-item">
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/web-design" className="dropdown-item">
                      Web Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/digital-marketing" className="dropdown-item">
                      Digital Marketing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/seo-smo" className="dropdown-item">
                      SEO / SMO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/app-development" className="dropdown-item">
                      App Development
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    'nav-link' + (isActive ? ' active' : '')
                  }
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    'nav-link' + (isActive ? ' active' : '')
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
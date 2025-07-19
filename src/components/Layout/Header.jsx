import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';


function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);



  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const dark = saved === 'dark';
    setIsDarkMode(dark);
    document.body.className = dark ? 'dark-mode' : 'light-mode';
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <header>
      {/* Top Bar */}
      <div className={`top-bar py-2  fixed-top ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="contact-info mb-1 mb-lg-0">
                      <i className="bi bi-envelope-fill fs-4 me-2 text-primary"></i>

            <a href="mailto:ht0257445@gmail.com">ht0257445@gmail.com</a>
            <span className="mx-3">|</span>
         <i className="bi bi-telephone-fill fs-4 me-2 text-primary"></i>
            <a href="tel:+919310891024">+91-9310891024</a>
          </div>
          <div className="d-flex align-items-center">
            <div className="social-icons me-3">
              <Link to="#" className="me-2"><i className="bi bi-facebook"></i></Link>
              <Link to="https://www.instagram.com/himanshu_sain____/" className="me-2"><i className="bi bi-instagram"></i></Link>
              <Link to="https://www.linkedin.com/in/himanshu-sain09090/"><i className="bi bi-linkedin"></i></Link>
            </div>
            <button className="btn btn-sm btn-outline-secondary btn-toggle-theme" onClick={toggleTheme}>
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg  ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-secondary'}`}>
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="logo" height="40" className="me-2" />
            <strong>My Wall Post</strong>
          </NavLink>

          <button
             className="navbar-toggler"
  type="button"
   aria-controls="navbarNav"
   aria-expanded={navbarOpen}
   aria-label="Toggle navigation"
   onClick={() => setNavbarOpen(prev => !prev)}

          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div   className={`collapse navbar-collapse${navbarOpen ? ' show' : ''}`}
 id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                onClick={() => setNavbarOpen(false)}

                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                {/* FIXED: Use <a> for Bootstrap dropdown-toggle */}
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><NavLink to="/services/web-development" className="dropdown-item">Web Development</NavLink></li>
                  <li><NavLink to="/services/web-design" className="dropdown-item">Web Design</NavLink></li>
                  <li><NavLink to="/services/digital-marketing" className="dropdown-item">Digital Marketing</NavLink></li>
                  <li><NavLink to="/services/seo-smo" className="dropdown-item">SEO / SMO</NavLink></li>
                  <li><NavLink to="/services/app-development" className="dropdown-item">App Development</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
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

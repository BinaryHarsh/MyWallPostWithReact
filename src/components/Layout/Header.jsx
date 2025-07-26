import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const topBarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
  }, [location]);

  const handleLogin = () => {
    localStorage.setItem('userLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <header>
      {/* Top Bar */}
      <div ref={topBarRef} className="top-bar fixed-top p-0 bg-light text-dark">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="contact-info d-flex align-items-center gap-2 small">
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:ht0257445@gmail.com">ht0257445@gmail.com</a>
            <span className="d-none d-md-inline">|</span>
            <i className="bi bi-telephone-fill text-primary ms-md-2"></i>
            <a href="tel:+919310891024">+91-9310891024</a>
          </div>
          <div className="d-flex align-items-center">
            <div className="social-icons me-2">
              <Link to="#" className="me-2"><i className="bi bi-facebook fs-6"></i></Link>
              <Link to="https://www.instagram.com/himanshu_sain____/" className="me-2"><i className="bi bi-instagram fs-6"></i></Link>
              <Link to="https://www.linkedin.com/in/himanshu-sain09090/"><i className="bi bi-linkedin fs-6"></i></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{ marginTop: '36px', backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="logo" height="40" className="me-2" />
            <strong>My Wall Post</strong>
          </NavLink>

          <button
            type="button"
            className="navbar-toggler"
            onClick={() => setNavbarOpen(prev => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse${navbarOpen ? ' show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav">
              <NavLink to="/" end className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}>
                About Us
              </NavLink>

              <div className="nav-item dropdown">
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
                <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <NavLink to="/services/web-development" className="dropdown-item">Web Development</NavLink>
                  <NavLink to="/services/web-design" className="dropdown-item">Web Design</NavLink>
                  <NavLink to="/services/digital-marketing" className="dropdown-item">Digital Marketing</NavLink>
                  <NavLink to="/services/seo-smo" className="dropdown-item">SEO / SMO</NavLink>
                  <NavLink to="/services/app-development" className="dropdown-item">App Development</NavLink>
                </div>
              </div>

              <NavLink to="/portfolio" className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}>
                Portfolio
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}>
                Contact
              </NavLink>
            </div>

            {/* Right side buttons */}
            <div className="navbar-nav ms-auto d-flex align-items-center gap-2">
              {!isLoggedIn ? (
                <>
                  <button className="btn btn-outline-primary btn-sm" onClick={handleLogin}>
                    Login
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={handleSignup}>
                    Signup
                  </button>
                </>
              ) : (
                <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

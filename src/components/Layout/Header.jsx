import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check login status
  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  // Close mobile menu when location changes
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
      {/* Navbar */}
      <nav 
        className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
      >
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

            {/* Login/Signup buttons */}
            {/* <div className="navbar-nav ms-auto d-flex align-items-center gap-2">
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
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
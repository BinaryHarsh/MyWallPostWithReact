import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

    
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="SmartDigitalWings" height="40" />
        </a>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

  
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="servicesMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu mega-menu" aria-labelledby="servicesMenu">
                <div className="row">
                  <div className="col-6">
                    <h6>Digital Marketing</h6>
                    <a className="dropdown-item" href="/services/seo">SEO Optimization</a>
                    <a className="dropdown-item" href="/services/smm">Social Media Marketing</a>
                    <a className="dropdown-item" href="/services/ppc">PPC Management</a>
                  </div>
                  <div className="col-6">
                    <h6>Web & App Development</h6>
                    <a className="dropdown-item" href="/services/webdev">Web Development</a>
                    <a className="dropdown-item" href="/services/appdev">App Development</a>
                    <a className="dropdown-item" href="/services/uiux">UI/UX Design</a>
                  </div>
                </div>
              </div>
            </li>

      
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="coursesMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <div className="dropdown-menu mega-menu" aria-labelledby="coursesMenu">
                <div className="row">
                  <div className="col-6">
                    <h6>Marketing Courses</h6>
                    <a className="dropdown-item" href="/courses/seo">SEO Mastery</a>
                    <a className="dropdown-item" href="/courses/social">Social Media Expert</a>
                    <a className="dropdown-item" href="/courses/ppc">PPC Specialist</a>
                  </div>
                  <div className="col-6">
                    <h6>Development Courses</h6>
                    <a className="dropdown-item" href="/courses/frontend">Front-end Dev</a>
                    <a className="dropdown-item" href="/courses/backend">Back-end Dev</a>
                    <a className="dropdown-item" href="/courses/fullstack">Full-stack Bootcamp</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/events">Events</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/gallery">Gallery</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
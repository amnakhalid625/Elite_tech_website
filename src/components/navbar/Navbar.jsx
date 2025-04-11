import React from 'react';
import logo from '../../assets/bg.png';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <section className="navbar-container shadow-lg">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={logo} alt="company-logo" className="logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="custom-toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Blog
                  </Link>
                </li>
                <li className="nav-item ms-md-3 mt-3 mt-md-0">
                  <button className="contact-btn">Contact Us</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

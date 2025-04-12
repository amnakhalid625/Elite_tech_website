import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row gy-4">

          <div className="col-md-4">
            <h4 className="footer-logo">Elite Tech Solutions</h4>
            <p className="footer-description">
              Empowering your business with innovative technology – from software development to cloud, AI, and growth marketing.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><Link  to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="footer-title">Services</h5>
            <ul className="list-unstyled footer-links">
              <li>Software Development</li>
              <li>Cloud & DevOps</li>
              <li>Digital Marketing</li>
              <li>UI/UX & Ecommerce</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="footer-title">Contact</h5>
            <p>Email: mehakirfan8394@gmail.com</p>
            <p>Phone: +92 3403394019</p>
            <p>Location: Silicon Valley, CA</p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="text-center pt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Elite Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

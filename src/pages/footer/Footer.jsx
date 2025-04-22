import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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

          <div className="col-md-2">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><Link to="/contact">Contact</Link></li>
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
            <p>
              Email:<a href="mailto:elitetechhub@elitetechhub.tech" className="contact-link">elitetechhub@elitetechhub.tech</a>
            </p>
            <p>
              Email:<a href="mailto:mehakirfan8394@gmail.com" className="contact-link">Mehakirfan@gmail.com</a>
            </p>
            <p>
              WhatsApp: <a href="https://wa.me/923403394019" target="_blank" rel="noopener noreferrer" className="contact-link">+92 3403394019</a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="col-12 text-center mt-4">
          <a href="https://www.facebook.com/share/12HMjfQ3BMt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link mx-2">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/elitetechprivatelimited/?igsh=MW1vOHdvNTU5ZWlvNw%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="social-link mx-2">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/elite-tech-private-limited/" target="_blank" rel="noopener noreferrer" className="social-link mx-2">
            <FaLinkedinIn />
          </a>
        </div>

        <hr className="footer-divider" />

        <div className="text-center pt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Elite Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

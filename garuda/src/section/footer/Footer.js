import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css"; // Import CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Description */}
        <div className="footer-left">
          <h2 className="footer-logo">Garuda <span className="text-color">Event Management</span></h2>
          <p>Your go-to platform for seamless event management.</p>
          <p><strong>Email:</strong> <a href="mailto:garudabusinessgroup@gmail.com">garudabusinessgroup@gmail.com</a></p>
          <p><strong>Contact:</strong> <a href="tel:+917028807933">+91 70288 07933</a></p>
        </div>

        {/* Center Section - Navigation */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Garuda Event Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

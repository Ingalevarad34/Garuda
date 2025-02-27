import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import CSS file
import { FaInstagram, FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import NotFoundImage from "../images/garuda/404.png"; // Replace with actual image

const NotFound = () => {
  return (
    <div className="not-found-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          Event <span className="text-purple">Hive</span>
        </h2>
        <div className="nav-links">
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/signup" className="nav-btn signup">Signup</Link>
        </div>
      </nav>

      {/* 404 Illustration */}
      <div className="not-found-content">
        <img src={NotFoundImage} alt="404 Not Found" className="not-found-image" />
        <h2>Oops!</h2>
        <p>We can’t seem to find the page you are looking for</p>
        <Link to="/" className="btn-primary">Back to Homepage</Link>
      </div>

      {/* Social Icons */}
      <div className="social-links">
        <p>Follow us on</p>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

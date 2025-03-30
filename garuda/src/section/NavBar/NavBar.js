import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { handleLogout } from "../../components/FirebaseAuth/profile";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3 navbar-main">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          Garuda<span className="text-primary">The Group Of Business</span>
        </Link>

        {/* Right Side (Login & Signup) */}
        <div className="d-flex align-items-center">
          <Link to="/login" className="btn btn-primary signup-btn" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

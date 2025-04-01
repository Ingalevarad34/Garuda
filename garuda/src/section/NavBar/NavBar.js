import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { handleLogout } from "../../components/FirebaseAuth/profile";

const Navbar = () => {
  // State to keep track of the cart items
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding items to the cart
  const addItemToCart = () => {
    setCartCount(cartCount + 1);
  };

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

          {/* Cart Icon */}
          <div className="cart-container ms-5">
            <div className="cart-icon" onClick={addItemToCart}>
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className={`item-count ${cartCount > 0 ? "show" : ""}`}>
              {cartCount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

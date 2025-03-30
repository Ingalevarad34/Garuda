import React from "react";
import "./hero.css"; // Import the CSS file
import { handleLogout } from "../../components/FirebaseAuth/profile";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="hero-container">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <strong>Garuda <span className="text-purple">The Group Of Business</span></strong>
                    </a>
                    <div className="ml-auto">
                        <div><Link className="signup-btn btn btn-primary ml-2" onClick={handleLogout}>
                            Logout
                        </Link></div>
                    </div>
                </div>
            </nav>

            {/* Hero Background */}
            <div className="hero-background">
                {/* <div className="hero-overlay"></div> */}
                {/* <div className="hero-content text-center">
                    <h1 className="hero-title">Let's Go Up Together</h1>
                </div> */}
            </div>
        </div>
    );
};

export default HeroSection;

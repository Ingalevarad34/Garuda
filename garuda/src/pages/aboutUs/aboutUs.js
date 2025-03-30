import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import AboutUsImg from '../../images/garuda/garuda-logo.jpg';
import Dm from '../../images/garuda/dm.png';
import Maharaja from '../../images/garuda/maharaja.jpg';
import Chantamani from '../../images/garuda/chantamani.png';
import Navbar from '../../section/NavBar/NavBar.js'
import Footer from "../../section/footer/Footer.js";
import { Link } from "react-router-dom";


const teamMembers = [
    { name: "DM Lights", image: Dm, link: "/dmlights" },
    { name: "Maharaja Events", image: Maharaja, link: "/maharaja" },
    { name: "Chintamani Wall Arts", image: Chantamani, link: "/chintamani" }
];

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="aboutus-container">
                {/* Hero Section */}
                <div className="aboutus-hero">
                    <img src={AboutUsImg} alt="About Us" className="aboutus-hero-image" />
                    {/* <div className="aboutus-title">
                    <h2 className="text-white">About Us</h2>
                    <p>Empowering events with seamless organization & participation.</p>
                </div> */}
                </div>

                {/* Description */}
                <div className="aboutus-content">
                    <p className="aboutus-description">
                        Garuda Group – Innovating Entertainment, Celebrations, and Art
                        At Garuda Group, we believe in crafting experiences that leave a lasting impact. As a dynamic organization, we specialize in three distinct yet interconnected domains—entertainment, events, and artistic craftsmanship. Each division of Garuda Group is dedicated to delivering excellence in its field, bringing innovation, creativity, and perfection to every project we undertake.
                    </p>
                </div>

                {/* Mission and Vision */}
                <div className="mission-vision-container">
                    <div className="mission-vision-content">
                        {/* Mission Section */}
                        <div className="mission-box">
                            {/* <img src={MissionIcon} alt="Mission Icon" className="icon-style" /> */}
                            <h2 className="mission-title">Mission</h2>
                            <p className="mission-text text-black">
                                Our mission is to deliver high-quality, innovative products and solutions
                                that empower our customers and elevate industry standards. Through continuous
                                research and development, we aim to provide cutting-edge technologies and
                                unmatched expertise to foster growth and success for our clients and stakeholders.
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="vision-box">
                            {/* <img src={VisionIcon} alt="Vision Icon" className="icon-style" /> */}
                            <h2 className="vision-title">Vision</h2>
                            <p className="vision-text text-black">
                                To become a global leader in providing innovative machinery, technological solutions,
                                and exceptional services, contributing to the advancement of industries worldwide.
                                We aspire to be recognized as a benchmark for quality, trust, and excellence in all
                                the sectors we serve.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}

                <div className="container py-5">

                    <h2 className="text-center about-header mt-5">Our Values</h2>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Innovation</h4>
                                <p>We embrace creativity and develop groundbreaking solutions for every challenge.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Quality</h4>
                                <p>We maintain the highest standards of quality in every product and service we offer.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Integrity</h4>
                                <p>Upholding transparency, honesty, and trust in every business relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Customer-Centricity</h4>
                                <p>Our clients are at the heart of everything we do, striving to exceed expectations.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Sustainability</h4>
                                <p>We practice sustainable approaches for long-term success and environmental responsibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Section */}
                <h2 className="aboutus-subtitle"><span className="text-highlight">Meet Our Business</span></h2>
                <div className="aboutus-team">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member" style={{ cursor: "pointer" }}>
                            <Link to={member.link}>
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-info">
                                    <h4 className="team-name">{member.name}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default AboutUs;

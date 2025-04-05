import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chintamani.css";
import chintamaniImg from '../../images/garuda/chantamani.png';
import Dm from '../../images/garuda/dm.png';
import Maharaj from '../../images/garuda/maharaja.jpg';
import Chantamani from '../../images/garuda/chantamani.png';
import Navbar from '../../section/NavBar/NavBar.js'
import Footer from "../../section/footer/Footer.js";
import { Link } from "react-router-dom";
import art1 from '../../images/garuda/events/wall-arts/art1.jpg'
import art2 from '../../images/garuda/events/wall-arts/art2.jpg'
import art3 from '../../images/garuda/events/wall-arts/art3.jpg'
import art4 from '../../images/garuda/events/wall-arts/art4.jpg'
import art5 from '../../images/garuda/events/wall-arts/art5.jpg'
import art6 from '../../images/garuda/events/wall-arts/art6.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const ChintamaniArtEvents = [
    {
        id: 13,
        media: art1,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Chintamani-Wall-arts",
    },
    {
        id: 14,
        media: art2,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Chintamani-Wall-arts",
    },
    {
        id: 15,
        media: art3,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Chintamani-Wall-arts",
    },
    {
        id: 16,
        media: art4,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Chintamani-Wall-arts",
    },
    {
        id: 17,
        media: art5,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Chintamani-Wall-arts",
    },
    {
        id: 18,
        media: art6,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Chintamani-Wall-arts",
    }
]

const teamMembers = [
    { name: "DM Lights", image: Dm, link: "/dmlights" },
    { name: "Maharaja Events", image: Maharaj, link: "/maharaja" },
    { name: "Chintamani Wall Arts", image: Chantamani, link: "/chintamani" }
];

const ChintamaniEvents = () => {
    return (
        <>
            <Navbar />
            <div className="chintamani-container">
                {/* Hero Section */}
                <div className="chintamani-hero">
                    <img src={chintamaniImg} alt="About Us" className="chintamani-hero-image" />
                    {/* <div className="chintamani-title">
                    <h2 className="text-white">About Us</h2>
                    <p>Empowering events with seamless organization & participation.</p>
                </div> */}
                </div>

                {/* Description */}
                <div className="chintamani-content">
                    <p className="chintamani-description">
                        At Chintamani Wall Arts, we specialize in creating exquisite, custom-designed wall art that adds a divine touch to your living spaces. Our unique creations feature intricately carved metal frames, beautifully illuminated with background lighting, bringing a sophisticated and spiritual ambiance to your home or office.

                        Each piece of art is carefully crafted to meet the individual preferences of our customers, with a focus on featuring revered god idols, creating personalized masterpieces that resonate with peace and positivity. We understand that every space deserves a meaningful and enriching decor, which is why our wall arts are designed to be not just aesthetic, but also spiritually uplifting.

                        Our team at Chintamani Wall Arts is committed to delivering quality craftsmanship, attention to detail, and exceptional customer satisfaction. Whether you’re looking to enhance your living room, temple room, or office, our wall art adds a sacred and elegant touch that inspires tranquility and devotion. Let us bring divine elegance to your space with our timeless creations.
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
                                At Chintamani Wall Arts, our mission is to craft personalized, divine wall art that enhances the beauty and spiritual essence of every space. We are committed to creating intricate, high-quality pieces featuring sacred idols and illuminated metal frames, tailored to our customers’ desires. Our goal is to bring peace, positivity, and elegance into homes and offices, one masterpiece at a time.
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="vision-box">
                            {/* <img src={VisionIcon} alt="Vision Icon" className="icon-style" /> */}
                            <h2 className="vision-title">Vision</h2>
                            <p className="vision-text text-black">
                                Our vision is to be the leading provider of custom wall art that combines spirituality and artistry, recognized for our exceptional craftsmanship and innovative designs. We aim to create timeless pieces that inspire devotion, tranquility, and a sense of sacredness in every space, making Chintamani Wall Arts a symbol of beauty, craftsmanship, and spiritual connection worldwide.
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
                                <h4 className="text-black">Creativity</h4>
                                <p>We design with passion, crafting each wall art piece with intricate details that reflect our client's spiritual and aesthetic preferences.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Quality</h4>
                                <p>We are committed to using the highest quality materials and craftsmanship, ensuring each piece is a lasting work of art that brings beauty and devotion to any space.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Spirituality</h4>
                                <p>We believe in the power of art to connect the divine with the everyday. Our pieces are designed to inspire peace, devotion, and a deeper spiritual connection within your space.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Customer-Centricity</h4>
                                <p>Every wall art we create is tailored to our client's unique vision, ensuring their spiritual and design preferences are reflected in every piece.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Innovation</h4>
                                <p>We continually push the boundaries of design, combining traditional art with modern technology to create stunning illuminated metal frame artworks that stand out.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>Follow Us On<a href="https://www.instagram.com/chintamani_wall_art/?igsh=MWxoOG9rdTV4eXM2bQ%3D%3D#" target="_blank" rel="noopener noreferrer"><FaInstagram  className="fs-4 ms-2 text-black"/></a>
                </div>

                {/* Events Grid */}
                <div className="row mt-4">
                    {ChintamaniArtEvents.map((event) => (
                        <div key={event.id} className="col-md-4 mt-4">
                            <div className="event-card">
                                {/* Media Handling: Image or Video */}
                                <div className="event-media">
                                    {event.type === "image" ? (
                                        <img src={event.media} alt="Event" className="event-image" />
                                    ) : (
                                        <video controls className="event-video">
                                            <source src={event.media} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}

                                </div>

                                {/* Event Details */}
                                <div className="event-details">
                                    <h5>{event.title}</h5>
                                    <p className="event-date">{event.date}</p>
                                    <p className="event-location">{event.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Section */}
                <h2 className="chintamani-subtitle"><span className="text-highlight">Meet Our Business</span></h2>
                <div className="chintamani-team">
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

export default ChintamaniEvents;

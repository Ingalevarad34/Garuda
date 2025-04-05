import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Maharaja.css";
import MaharajaImg from '../../images/garuda/maharaja.jpg';
import Dm from '../../images/garuda/dm.png';
import Maharaja from '../../images/garuda/maharaja.jpg';
import Chantamani from '../../images/garuda/chantamani.png';
import Navbar from '../../section/NavBar/NavBar.js'
import Footer from "../../section/footer/Footer.js";
import { Link } from "react-router-dom";
import mah1 from '../../images/garuda/events/maharaja/mah1.jpg'
import mah2 from '../../images/garuda/events/maharaja/mah2.jpg'
import mah3 from '../../images/garuda/events/maharaja/mah3.jpg'
import mah4 from '../../images/garuda/events/maharaja/mah4.jpg'
import mah5 from '../../images/garuda/events/maharaja/mah5.jpg'
import mah6 from '../../images/garuda/events/maharaja/mah6.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const MaharajEvents = [
    {
        id: 7,
        media: mah1,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Maharaj-Events",
    },
    {
        id: 8,
        media: mah2,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Maharaj-Events",
    }, {
        id: 9,
        media: mah3,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Maharaj-Events",
    }, {
        id: 10,
        media: mah4,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Maharaj-Events",
    }, {
        id: 11,
        media: mah5,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Maharaj-Events",
    }, {
        id: 12,
        media: mah6,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Maharaj-Events",
    }
]

const teamMembers = [
    { name: "DM Lights", image: Dm, link: "/dmlights" },
    { name: "Maharaja Events", image: Maharaja, link: "/maharaja" },
    { name: "Chintamani Wall Arts", image: Chantamani, link: "/chintamani" }
];

const MaharajaEvents = () => {
    return (
        <>
            <Navbar />
            <div className="maharaja-container">
                {/* Hero Section */}
                <div className="maharaja-hero">
                    <img src={MaharajaImg} alt="About Us" className="maharaja-hero-image" />
                    {/* <div className="maharaja-title">
                    <h2 className="text-white">About Us</h2>
                    <p>Empowering events with seamless organization & participation.</p>
                </div> */}
                </div>

                {/* Description */}
                <div className="maharaja-content">
                    <p className="maharaja-description">
                        At Maharaja Decorations, we specialize in transforming ordinary spaces into extraordinary venues for any occasion. From grand weddings and lively parties to corporate events and intimate ceremonies, we provide premium decoration services that bring your vision to life. With a keen eye for detail and a passion for design, we create stunning, personalized decor that sets the perfect atmosphere for your special moments.

                        Our team of expert decorators brings years of experience, creativity, and craftsmanship to every project, ensuring that each event is nothing short of spectacular. Whether you’re looking for elegant floral arrangements, themed party decorations, or a complete venue transformation, Maharaja Decorations is here to make your dreams a reality.

                        We understand the importance of your celebration, and our mission is to provide top-notch service, quality materials, and impeccable attention to detail. At Maharaja Decorations, we don't just decorate spaces – we create memorable experiences that will leave a lasting impression on you and your guests.
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
                                At Maharaja Decorations, our mission is to create breathtaking, custom-made decor that transforms every event into an unforgettable experience. We are committed to delivering exceptional design and service for every occasion, from weddings to corporate functions. With our creativity, attention to detail, and dedication to perfection, we aim to make your special moments truly remarkable.
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="vision-box">
                            {/* <img src={VisionIcon} alt="Vision Icon" className="icon-style" /> */}
                            <h2 className="vision-title">Vision</h2>
                            <p className="vision-text text-black">
                                Our vision is to be the leading provider of innovative and exquisite decoration services, known for turning every celebration into a masterpiece. We strive to continuously elevate our craft, pushing the boundaries of design and decoration to deliver unique, memorable experiences for our clients. Maharaja Decorations envisions a future where every event we touch becomes an extraordinary celebration of love, joy, and beauty.
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
                                <p>We embrace creativity and design with a passion for making every event unique and beautiful, from weddings to parties and beyond.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Quality</h4>
                                <p>We ensure the highest standards of quality in every decoration, delivering elegant and flawless designs that elevate every occasion.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Integrity</h4>
                                <p>We are committed to building trust through transparency and honesty, fostering long-lasting relationships with our clients.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Customer-Centricity</h4>
                                <p>Our clients’ dreams and visions are at the heart of what we do, ensuring every decoration reflects their desires and exceeds expectations.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Timeless Elegance</h4>
                                <p>We focus on creating timeless and elegant decor that brings beauty and joy to every celebration, leaving lasting memories for all.</p>
                            </div>
                        </div>
                    </div>
                </div>

<div>Follow Us On<a href="https://www.instagram.com/maharaja_.events?igsh=MTU5YXI1djY4NHp3bg==" target="_blank" rel="noopener noreferrer"><FaInstagram  className="fs-4 ms-2 text-black"/></a>
                </div>
                {/* Events Grid */}
                <div className="row mt-4">
                    {MaharajEvents.map((event) => (
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
                <h2 className="maharaja-subtitle"><span className="text-highlight">Meet Our Business</span></h2>
                <div className="maharaja-team">
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

export default MaharajaEvents;

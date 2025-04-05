import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DmLights.css";
import DmLightsImg from '../../images/garuda/dm.png';
import Dm from '../../images/garuda/dm.png';
import Maharaja from '../../images/garuda/maharaja.jpg';
import Chantamani from '../../images/garuda/chantamani.png';
import Navbar from '../../section/NavBar/NavBar.js'
import Footer from "../../section/footer/Footer.js";
import { Link } from "react-router-dom";
import dm1 from '../../images/garuda/events/dm-lights/dm1.jpg';
import dm2 from '../../images/garuda/events/dm-lights/dm1.mp4';
import dm3 from '../../images/garuda/events/dm-lights/dm2.jpg';
import dm4 from '../../images/garuda/events/dm-lights/dm2.mp4';
import dm5 from '../../images/garuda/events/dm-lights/dm3.jpg';
import dm6 from '../../images/garuda/events/dm-lights/dm3.mp4';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const DmLightEvents = [
    {
        id: 1,
        media: dm1, // Image
        type: "image",
        title: "BestSeller Book Bootcamp - Write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 9:30PM",
        location: "ONLINE EVENT - Attend anywhere",
        category: "Dm-Lights",
    },
    {
        id: 2,
        media: dm2, // Video
        type: "video",
        title: "Music Festival - Live Concert Night",
        date: "Friday, April 12, 8:00PM",
        location: "Mumbai, India",
        category: "Dm-Lights",
    },
    {
        id: 3,
        media: dm3,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Dm-Lights",
    },
    {
        id: 4,
        media: dm4,
        type: "video",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Dm-Lights",
    },
    {
        id: 5,
        media: dm5,
        type: "image",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Dm-Lights",
    },
    {
        id: 6,
        media: dm6,
        type: "video",
        title: "Startup Networking Event - Meet Founders & Investors",
        date: "Monday, May 5, 6:00PM",
        location: "Bangalore, India",
        category: "Dm-Lights",
    }
]

const teamMembers = [
    { name: "DM Lights", image: Dm, link: "/dmlights" },
    { name: "Maharaja Events", image: Maharaja, link: "/maharaja" },
    { name: "Chintamani Wall Arts", image: Chantamani, link: "/chintamani" }
];

const DmLights = () => {
    return (
        <>
            <Navbar />
            <div className="dmlights-container">
                {/* Hero Section */}
                <div className="dmlights-hero">
                    <img src={DmLightsImg} alt="About Us" className="dmlights-hero-image" />
                    {/* <div className="dmlights-title">
                    <h2 className="text-white">About Us</h2>
                    <p>Empowering events with seamless organization & participation.</p>
                </div> */}
                </div>

                {/* Description */}
                <div className="dmlights-content">
                    <p className="dmlights-description">
                        At DM Lights, we specialize in creating unforgettable light experiences through expertly crafted light shows and roadshows. Our mission is to illuminate events with stunning visual displays that captivate audiences and leave lasting memories. Whether it's a corporate event, wedding, concert, or public celebration, we transform ordinary spaces into extraordinary environments with our cutting-edge lighting technology and creative designs.

                        With years of experience in the industry, our team of lighting experts is dedicated to delivering the perfect ambiance for any occasion. We work closely with our clients to understand their vision, ensuring that each event is customized to exceed expectations. From concept to execution, we bring your ideas to life with precision and flair.

                        DM Lights is more than just lighting; we’re passionate about creating atmospheres that resonate, energize, and inspire. Trust us to light up your next event with brilliance and style.
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
                                At DM Lights, our mission is to deliver extraordinary lighting experiences that elevate events and captivate audiences. Through innovative designs and state-of-the-art technology, we aim to create unforgettable moments that leave a lasting impression. We are committed to providing customized lighting solutions for every occasion, ensuring that each event is illuminated with precision, creativity, and excellence.
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="vision-box">
                            {/* <img src={VisionIcon} alt="Vision Icon" className="icon-style" /> */}
                            <h2 className="vision-title">Vision</h2>
                            <p className="vision-text text-black">
                                Our vision is to be a leading provider of lighting solutions, recognized for transforming ordinary events into extraordinary experiences. We strive to push the boundaries of creativity and technology, continually setting new standards in the lighting industry. DM Lights envisions a future where our innovative lighting displays are a core element in bringing people together, inspiring awe, and enhancing the overall atmosphere of events worldwide.

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
                                <p>We embrace creativity, utilizing cutting-edge technology and design to bring extraordinary light experiences to every event.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Quality</h4>
                                <p>We uphold the highest standards of quality, ensuring every lighting display is flawlessly executed to create stunning visual experiences.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Integrity</h4>
                                <p>We are committed to transparency, honesty, and trust, fostering lasting relationships with our clients and partners.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Customer-Centricity</h4>
                                <p>Our clients’ visions are at the heart of everything we do, ensuring we exceed expectations with every customized light display.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="values-card shadow-sm">
                                <h4 className="text-black">Sustainability</h4>
                                <p>We embrace environmentally responsible practices, ensuring long-term success for our business and the planet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>Follow Us On<a href="https://www.instagram.com/dm_lights_koregaon?igsh=MWE5bWFkanphNnhuMg==" target="_blank" rel="noopener noreferrer"><FaInstagram  className="fs-4 ms-2 text-black"/></a>
                </div>
                {/* Events Grid */}
                <div className="row mt-4">
                    {DmLightEvents.map((event) => (
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
                <h2 className="dmlights-subtitle"><span className="text-highlight">Meet Our Business</span></h2>
                <div className="dmlights-team">
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

export default DmLights;

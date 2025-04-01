import React from "react";
import "./ContactUs.css"; // Custom CSS file
import Navbar from "../../section/NavBar/NavBar";
import Footer from "../../section/footer/Footer";
import OurProjects from "../../section/project/OurProjects";

const ContactUs = () => {
    return (
        <div className="contact-page">
            <Navbar/>
            {/* Header Section */}
            <div className="mt-5">
                <div className="text-center">
                    <h1 className="fw-bold">Contact Us</h1>
                    <p className="mt-2">We’d love to hear from you!</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {/* Contact Details */}
                    <div className="col-md-6">
                        <h2 className="fw-bold">Get in Touch</h2>
                        <p className="text-muted">
                            Have a question? Reach out to us via phone, email, or visit our office.
                        </p>
                        <div className="contact-info mt-3">
                            <p><strong>📍 Address:</strong> D P Bhosale College Koregaon
                                M5PG+J2V, Koregaon, Satara,</p>
                            <p><strong>Contact:</strong> <a href="tel:+917028807933">+91 70288 07933</a></p>
                            <p><strong>Email:</strong> <a href="mailto:garudabusinessgroup@gmail.com">garudabusinessgroup@gmail.com</a></p>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="col-md-6">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2293619611182!2d74.17248297521719!3d17.686621883252496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23481386ff193%3A0x203ba8ca2e089e43!2sD%20P%20Bhosale%20College%20Koregaon!5e0!3m2!1sen!2sin!4v1743478405145!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="mt-5">
                    <h2 className="fw-bold">Business Hours</h2>
                    <ul className="list-unstyled mt-3">
                        <li>Monday - Friday: <strong>9:00 AM - 6:00 PM</strong></li>
                        <li>Saturday: <strong>10:00 AM - 4:00 PM</strong></li>
                        <li>Sunday: <strong>Closed</strong></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="mt-5">
                    <h2 className="fw-bold">Follow Us</h2>
                    <div className="d-flex gap-3 mt-3">
                        <a href="#" className="social-icon bg-primary"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon bg-info"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon bg-success"><i className="fab fa-whatsapp"></i></a>
                        <a href="#" className="social-icon bg-primary"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <OurProjects/>
            <Footer/>
        </div>
    );
};

export default ContactUs;

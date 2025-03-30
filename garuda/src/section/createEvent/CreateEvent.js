import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEvent.css"; // Import the CSS file
import eventIllustration from "../../images/garuda/createEvent.png";

const CreateEvent = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    navigate("/createformevent"); // Redirect to Create Event page
  };

  return (
    <div className="create-event-container">
      <div className="create-event-content">
        {/* Left Section - Image */}
        <div className="create-event-image">
          <img src={eventIllustration} alt="Create Event" />
        </div>

        {/* Right Section - Text & Button */}
        <div className="create-event-text">
          <h2 className="text-white">Make your own Event</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary" onClick={handleClick}>Create Events</button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;

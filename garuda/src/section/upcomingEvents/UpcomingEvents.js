import React, { useState } from "react";
import "./events.css"; // Import CSS file
import dm1 from '../../images/garuda/events/dm-lights/dm1.jpg';
import dm2 from '../../images/garuda/events/dm-lights/dm1.mp4';
import dm3 from '../../images/garuda/events/dm-lights/dm2.jpg';
import dm4 from '../../images/garuda/events/dm-lights/dm2.mp4';
import dm5 from '../../images/garuda/events/dm-lights/dm3.jpg';
import dm6 from '../../images/garuda/events/dm-lights/dm3.mp4';

import mah1 from '../../images/garuda/events/maharaja/mah1.jpg'
import mah2 from '../../images/garuda/events/maharaja/mah2.jpg'
import mah3 from '../../images/garuda/events/maharaja/mah3.jpg'
import mah4 from '../../images/garuda/events/maharaja/mah4.jpg'
import mah5 from '../../images/garuda/events/maharaja/mah5.jpg'
import mah6 from '../../images/garuda/events/maharaja/mah6.jpg'

import art1 from '../../images/garuda/events/wall-arts/art1.jpg'
import art2 from '../../images/garuda/events/wall-arts/art2.jpg'
import art3 from '../../images/garuda/events/wall-arts/art3.jpg'
import art4 from '../../images/garuda/events/wall-arts/art4.jpg'
import art5 from '../../images/garuda/events/wall-arts/art5.jpg'
import art6 from '../../images/garuda/events/wall-arts/art6.jpg'

const allEvents = [
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
  },
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
  },{
    id: 9,
    media: mah3, 
    type: "image",
    title: "Startup Networking Event - Meet Founders & Investors",
    date: "Monday, May 5, 6:00PM",
    location: "Bangalore, India",
    category: "Maharaj-Events",
  },{
    id: 10,
    media: mah4, 
    type: "image",
    title: "Startup Networking Event - Meet Founders & Investors",
    date: "Monday, May 5, 6:00PM",
    location: "Bangalore, India",
    category: "Maharaj-Events",
  },{
    id: 11,
    media: mah5, 
    type: "image",
    title: "Startup Networking Event - Meet Founders & Investors",
    date: "Monday, May 5, 6:00PM",
    location: "Bangalore, India",
    category: "Maharaj-Events",
  },{
    id: 12,
    media: mah6, 
    type: "image",
    title: "Startup Networking Event - Meet Founders & Investors",
    date: "Monday, May 5, 6:00PM",
    location: "Bangalore, India",
    category: "Maharaj-Events",
  },
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
];

const eventCategories = ["All", "Maharaj-Events", "Dm-Lights", "Chintamani-Wall-arts"];

const UpcomingEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter events based on selected category
  const filteredEvents =
    selectedCategory === "All" ? allEvents : allEvents.filter((event) => event.category === selectedCategory);

  return (
    <div className="container mt-5 bg-white">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="section-title">
          Upcoming <span className="text-color">Events</span>
        </h2>

        {/* Filters */}
        <div className="d-flex gap-3">
         

          {/* Event Type Dropdown */}
          <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {eventCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

        </div>
      </div>

      {/* Events Grid */}
      <div className="row mt-4">
        {filteredEvents.map((event) => (
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
    </div>
  );
};

export default UpcomingEvents;

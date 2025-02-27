import React from "react";
import "./OurProjects.css"; 
import dm2 from '../../images/garuda/events/dm-lights/dm1.mp4';
import dm4 from '../../images/garuda/events/dm-lights/dm2.mp4';
import dm6 from '../../images/garuda/events/dm-lights/dm3.mp4';

const projects = [
  {
    id: 1,
    media: dm2, 
    type: "video",
    title: "Architectural Marvel - Downtown Skyscraper",
    description: "A modern skyscraper designed with sustainable materials.",
    date: "Completed: Jan 2024",
  },
  {
    id: 2,
    media: dm4, 
    type: "video",
    title: "Bridge Construction Timelapse",
    description: "Watch how we built this massive bridge step by step.",
    date: "Completed: March 2023",
  },
  {
    id: 3,
    media: dm6, 
    type: "video",
    title: "Eco-Friendly Residential Complex",
    description: "A green housing project with solar-powered amenities.",
    date: "Completed: Dec 2022",
  },
];

const OurProjects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">
        Our <span className="text-color">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Media Handling */}
            <div className="project-media">
              {project.type === "image" ? (
                <img src={project.media} alt="Project" className="project-image" />
              ) : (
                <video controls className="project-video">
                  <source src={project.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <span className="project-badge">Featured</span>
            </div>

            {/* Project Details */}
            <div className="project-details">
              <h5>{project.title}</h5>
              <p className="project-description">{project.description}</p>
              <p className="project-date">{project.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;

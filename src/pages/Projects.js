// Projects.jsx
import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Note-Taking App',
    description: 'A web application for creating, managing, and sharing notes. Built with FastAPI, MongoDB, and HTML/CSS.',
    technologies: ['FastAPI', 'MongoDB', 'HTML', 'CSS'],
    liveDemo: 'https://your-note-app-demo.com',
    github: 'https://github.com/yourusername/note-taking-app',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects, skills, and experience. Built with React and styled-components.',
    technologies: ['React', 'styled-components', 'JavaScript'],
    liveDemo: 'https://your-portfolio.com',
    github: 'https://github.com/yourusername/portfolio-website',
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id = "projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


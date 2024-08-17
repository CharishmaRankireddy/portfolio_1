// Skills.jsx
import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'JavaScript', icon: '🟨', level: 'Advanced' },
  { name: 'React', icon: '⚛️', level: 'Advanced' },
  { name: 'Node.js', icon: '🟩', level: 'Intermediate' },
  { name: 'MongoDB', icon: '🍃', level: 'Intermediate' },
  { name: 'HTML & CSS', icon: '🌐', level: 'Advanced' },
  { name: 'Git', icon: '🔧', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <div className="skills-container" id='skills'>
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

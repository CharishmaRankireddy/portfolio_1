// Internships.jsx
import React from 'react';
import './Internships.css';

const internshipsData = [
  {
    company: 'FOUNDATIONS OF MODREN MACHINE LEARNING.',
    position: 'Intern',
    duration: 'August 2023 - May 2024',
    description: 'To learn machine learning and complete weekly labs using python machine learning.',
  },
  {
    company: 'APSSDC',
    position: 'Intern',
    duration: 'MAY 2024 - JULY 2024',
    description: 'It is a 6 weeks internship and we learn machine learning and do a project and submit it.',
  },
];

const Internships = () => {
  return (
    <div className="internships-container" id = "internships">
      <h2>Internships</h2>
      <div className="internships-list">
        {internshipsData.map((internship, index) => (
          <div key={index} className="internship-item">
            <h3>{internship.company}</h3>
            <h4>{internship.position}</h4>
            <p className="duration">{internship.duration}</p>
            <p className="description">{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;

//import React from 'react';
import './CertificatesPage.css';

const certificates = [
    {
        title: 'Certificate in Web Development',
        issuer: 'Coursera',
        date: 'January 2024',
        description: 'An in-depth course covering HTML, CSS, and JavaScript.'
    },
    {
        title: 'React Mastery',
        issuer: 'Udemy',
        date: 'March 2024',
        description: 'Advanced concepts and practical applications of React.'
    },
    // Add more certificates as needed
];

const CertificatesPage = () => {
    return (
        <div className="certificates-page">
            <h1>Certificates</h1>
            <div className="certificates-list">
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate">
                        <h2>{certificate.title}</h2>
                        <p><strong>Issuer:</strong> {certificate.issuer}</p>
                        <p><strong>Date:</strong> {certificate.date}</p>
                        <p>{certificate.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificatesPage;

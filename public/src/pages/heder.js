// Header.jsx
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import './heder.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get initial theme from localStorage
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    // Apply the theme to the body
    document.body.classList.toggle('dark-mode', isDarkMode);
    // Save the theme to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">My Portfolio</a>
      </div>
      <nav>
        <ul className="nav-links">
          <li><button onClick={() => document.getElementById('about').scrollIntoView()}>About</button></li>
          <li><button onClick={() => document.getElementById('skills').scrollIntoView()}>Skills</button></li>
          <li><button onClick={() => document.getElementById('projects').scrollIntoView()}>Projects</button></li>
          <li><button onClick={() => document.getElementById('internships').scrollIntoView()}>Internships</button></li>
          <li><button onClick={() => document.getElementById('contact').scrollIntoView()}>Contact</button></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://github.com/CharishmaRankireddy/CharishmaRankireddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/charishma-rankireddy-617706289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;

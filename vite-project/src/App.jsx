import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import portfolioImage from './assets/www.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
        <ul className="navbar">
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>

      <header>
        <h1>Ali Hamze</h1>
        <p>Web Developer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm Ali, a passionate web developer with expertise spanning multiple languages and frameworks. My coding journey started with the foundational trio of HTML, CSS, and JavaScript. With time, I expanded my skill set diving deep into SQL, C#, React, and Node.js. Additionally, I'm adept at data analytics, ensuring that I leverage data to drive my development decisions. When I'm not coding, you'll often find me exploring the latest web trends, ensuring I always stay ahead of the curve.
        </p>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <img src={portfolioImage} alt="Ali Hamze's Portfolio" className="portfolio-image" />
        <p>
          Proudly collaborated with <strong>WeWorkingWomen</strong> to enhance and modernize their online presence. The initial design was meticulously crafted using Figma, capturing the essence and vision of the platform. Upon approval, I transformed the Figma design into a dynamic and responsive WordPress website, ensuring every detail was faithfully represented. My mission was to provide an improved user experience, streamline site navigation, and bring the WeWorkingWomen's vision to life on the web.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>C#</li>
          <li>Data Analytics</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Figma</li>
          <li>WordPress</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch or collaborate on a project, feel free to send me a message using the form below:</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>

      <footer>
        <p>Connect with me on <a href="https://www.linkedin.com/in/ali-hamze-10396027b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;

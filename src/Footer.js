import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h6>Contact Us</h6>
          <p>
            Phone: (123) 456-7890<br />
            Email: info@example.com<br />
            Address: 123 Street, New Delhi
          </p>
        </div>
        <div className="footer-courses">
          <h6>Explore our Courses</h6>
          <ul>
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advanced</li>
            <li>Grammar</li>
          </ul>
        </div>
        <div className="footer-links">
          <h6>Quick Links</h6>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h6>Follow Us</h6>
          <ul>
            <li>
              <a href="https://www.linkedin.com/">Linkedin</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
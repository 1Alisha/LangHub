import React from 'react';
import './Navbar.css';
import Image from 'react-bootstrap/Image';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Image src="logo.jpg" alt="Logo" className="img"/>
        <h5 className="h5">LangHub</h5> 
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ's</a>
      </div>
    </div>

  );
}

export default Navbar;
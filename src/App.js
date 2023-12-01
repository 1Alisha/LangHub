import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Navbar from './Navbar';
import About from './About';
import Courses from './Courses';
import Contact from './Contact';
import FAQPage from './FAQPage';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
        <About />
        <Courses />
        <Contact />
        <FAQPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
import { useState } from 'react';
import logo from '../assets/logo.jpg'; // Ensure this path is correct

function Home() {
  // Adding the state for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="top-bar-main">
        <div className="top-bar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
            <a href="#" onClick={toggleMenu}>Home</a>
            <a href="#" onClick={toggleMenu}>Service</a>
            <a href="#" onClick={toggleMenu}>Production</a>
            <a href="#" onClick={toggleMenu}>Contact Us</a>
          </nav>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <button className="contact-button">ENTRE EM CONTATO</button>
        </div>
      </header>
    </>
  );
}

export default Home;

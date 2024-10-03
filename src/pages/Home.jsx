import { useState } from 'react';
import whatsapp from "../assets/whatsapp.png"
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
          <button className="contact-button">
            <img src={whatsapp} className="icon-whastapp" alt="WhatsApp" />
            ENTRE EM CONTATO
          </button>
        </div>
      </header>

      <div className='main-container'>
      <section id="hero" className='introduction'>
      <h1>Welcome to My Website</h1>
      <p>This is the main hero section with a brief introduction.</p>
    </section>
      </div>
    </>
  );
}

export default Home;

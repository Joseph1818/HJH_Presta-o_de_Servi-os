import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import whatsapp from "../assets/whatsapp.png";
import logo from '../assets/Logo HJH Vinho.png'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Controls navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User scrolls down, hide navbar
        setShowNavbar(false);
      } else {
        // User scrolls up, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    // Attach event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`top-bar-main ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/service" onClick={toggleMenu}>Serviços</Link>
          <Link to="/Contact_us" onClick={toggleMenu}>Contate-nos</Link>
        </nav>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <button className="contact-button"
          onClick={() => {
            window.open(
              'https://wa.me/244944691783?text=Olá,%20gostaria%20de%20mais%20informações!',
              '_blank'
            );
          }}
        >
          <img src={whatsapp} className="icon-whatsapp" alt="WhatsApp" />
          ENTRE EM CONTATO
        </button>
      </div>
    </header>
  );
}

export default Navbar;

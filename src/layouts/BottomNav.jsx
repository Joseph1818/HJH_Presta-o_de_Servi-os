import { useLocation } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing Font Awesome icons

export default function BottomNav() {
  const location = useLocation();

  return (
    location.pathname === "/client_portal/" ? null :
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp />
        </a>
        <a href="mailto:youremail@example.com" className="social-icon">
          <FaEnvelope />
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Só-Frio. Todos os direitos reservados.
      </div>
    </div>
  </footer>
  );
}

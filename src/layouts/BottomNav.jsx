import { useLocation } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing Font Awesome icons

export default function BottomNav() {
  const location = useLocation();

  return (
    location.pathname === "/client_portal/" ? null :
<footer className="footer">
  <div className="footer-container">
    <div className="footer-contact">
      <p>📞 +244 944 691 / 951 665 322</p>
    </div>

    <div className="footer-social">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaFacebook />
      </a>
      <a href="https://wa.me/944691322" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaWhatsapp />
      </a>
      <a href="mailto:geral@hjh.ao" className="social-icon">
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

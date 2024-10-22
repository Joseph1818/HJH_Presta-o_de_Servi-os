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
      <a href="https://wa.me/244944691783?text=Olá,%20gostaria%20de%20mais%20detalhes%20sobre%20os%20serviços!',
              '_blank" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaWhatsapp />
      </a>
      <a href="mailto:geral@hjh.ao" className="social-icon">
        <FaEnvelope />
      </a>
    </div>

    <div className="footer-copyright">
    <p>&copy; {new Date().getFullYear()} HJH. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

  );
}

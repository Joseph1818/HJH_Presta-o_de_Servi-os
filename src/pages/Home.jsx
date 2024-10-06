import { useState } from 'react';
import whatsapp from "../assets/whatsapp.png"
import { useInView } from 'react-intersection-observer';


import logo from '../assets/logo.jpg'; // Ensure this path is correct

function Home() {
  // Adding the state for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

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
<main >
      <div className='main-container'>
        <section id="hero" className='introduction'>
          <h1>Deixe seu ambiente sempre fresco e saudável!</h1>
          <p>Venda, instalação e manutenção de ar-condicionado com quem entende do assunto.</p>

          <button className="contact-button">
            <img src={whatsapp} className="icon-whastapp" alt="WhatsApp" />
            ENTRE EM CONTATO
          </button>
        </section>

        
      </div>
      <section ref={ref} className={` service box ${inView ? 'visible' : ''}`} >
    <div className='child'>
        <div className="image-container">
            <img src={logo} className="logo2" alt="Service 1" />
        </div>
        <p>A equipe qualificada da Só Frio realiza a instalação de
          todos os tipos de equipamentos condicionadores de ar.
          Realizamos vistoria no local de instalação para o correto
          dimensionamento do tipo de equipamento.
        </p>
    </div>
    <div className='child'>
        <div className="image-container">
            <img src={logo} className="logo2" alt="Service 2" />
        </div>
        <p>
          Não deixe para fazer a manutenção de seu equipamento somente depois que ele quebrou.
          Com a manutenção preventiva, você aumenta a vida útil de seu equipamento mantendo seus
          componentes em perfeito estado.
        </p>
    </div>
    <div className='child'>
        <div className="image-container">
            <img src={logo} className="logo2" alt="Service 3" />
        </div>
        <p>
          A Só Frio possui a mais completa equipe de profissionais, com comprovada
          experiência, para fornecer e instalar sistemas de HVAC centrais desde
          pequenos sistemas até obras comerciais/indústrias complexas.
        </p>
    </div>
    <div className='child'>
        <div className="image-container">
            <img src={logo} className="logo2" alt="Service 4" />
        </div>
        <p>Na Só Frio você encontra uma grande variedade de equipamentos de ar
          condicionados, além do melhor atendimento e condições exclusivas. Entre
          em contato com nossa equipe e confira nossos modelos.
        </p>
    </div>
    <div className='child'>
        <div className="image-container">
            <img src={logo} className="logo2" alt="Service 5" />
        </div>
        <p>
          Para saber mais sobre o sistema VRF/VRV, entre em contato
          e solicite uma visita Técnica com nossos Engenheiros. Para
          maiores informações, entre em contato com nossa equipe de atendimento.
        </p>
    </div>
</section>






      </main>

      
    </>
  );
}

export default Home;

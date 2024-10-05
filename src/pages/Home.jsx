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
<main >
      <div className='main-container'>
        <section id="hero" className='introduction'>
          <h1>Deixe seu ambiente sempre fresco e saudável!</h1>
          <p>Venda, instalação e manutenção de ar-condicionado com quem entende do assunto.</p>

          <button className="contact-button-main">
            <img src={whatsapp} className="icon-whastapp" alt="WhatsApp" />
            ENTRE EM CONTATO
          </button>
        </section>

        
      </div>
     
      </main>

      <section className='main-service'>
          <div className='child1'>
            <img src={logo} className="logo2" alt="" />
            <p>A equipe qualificada da Só Frio realiza a instalação de
              todos os tipos de equipamentos condicionadores de ar.
              Realizamos vistoria no local de instalação para o correto
              dimensionamento do tipo de equipamento.
            </p>

          </div>
          <div className='child2'>
          <img src={logo} className="logo2" alt="" />

            <p>
              Não deixe para fazer a manutenção de seu equipamento somente depois que ele quebrou.
              Com a manutenção preventiva, você aumenta a vida útil de seu equipamento mantendo seus
              componentes em perfeito estado.
            </p>

          </div>
          <div className='child3'>
          <img src={logo} className="logo2" alt="" />

            <p>
              A Só Frio possui a mais completa equipe de profissionais, com comprovada
              experiência, para fornecer e instalar sistemas de HVAC centrais desde
              pequenos sistemas
              até obras comerciais/industrias complexas.
            </p>
          </div>
          <div className='child4'>
          <img src={logo} className="logo2" alt="" />

            <p>Na Só Frio você encontra uma grande variedade de equipamentos de ar
              condicionados, além do melhor atendimento e condições exclusiva. Entre
              em contato com
              nossa equipe e confira nossos modelos.</p>
          </div>
          <div className='child5'>
          <img src={logo} className="logo2" alt="" />

            <p>
            Para saber mais sobre o sistema VRF/VRV, entre em contato 
            e solicite uma visita Técnica com nossos Engenheiros. Para
            maiores informações, entre em 
            contato com nossa equipe de. atendimento
            </p>

          </div>

        </section>
    </>
  );
}

export default Home;

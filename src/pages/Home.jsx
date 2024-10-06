import { useState } from 'react';
import clim from "../assets/download.jpeg"
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

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    observations: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation logic
  const validateForm = () => {
    let formErrors = {};
    const phoneRegex = /^[0-9\b]+$/; // Only allow numbers in phone

    if (!formData.fullName) formErrors.fullName = 'Nome Completo é obrigatório';
    if (!formData.address) formErrors.address = 'Endereço é obrigatório';
    if (!formData.city) formErrors.city = 'Cidade é obrigatória';
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      formErrors.phone = 'Telefone é obrigatório e deve ser válido';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email é obrigatório e deve ser válido';
    }
    if (!formData.observations) formErrors.observations = 'Observações são obrigatórias';

    return formErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid - submit data
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } else {
      // Set errors for invalid fields
      setErrors(formErrors);
    }
  };


  return (
   <>

      <main className="main-container">
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
        <section className="content-wrapper">
          <div className="content">
            <div className='content-flex'>
              <div>
                <h1>Deixe seu ambiente sempre fresco e saudável!</h1>
                <p>La climatisation est un véritable atout confort, quel que soit le logement. Mais il est indispensable de choisir un modèle qui soit adapté à vos besoins parmi les différents types de climatiseurs proposés sur le marché. Le climatiseur cassette, également appelé « clim plafonnier », peut constituer une option intéressante pour rafraîchir des pièces particulièrement spacieuses. Vous vous demandez si le climatiseur cassette pourrait répondre
                   à vos besoins ? Voyons cela ensemble dans cet article…</p>
              </div>
              <div>
                <button className="contact-button">
                  <img src={whatsapp} className="icon-whatsapp" alt="WhatsApp" />

                  <span className="button-text">ENTRE EM CONTATO</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section ref={ref} className={`service box ${inView ? 'visible' : ''}`} >
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

        <div className="white-line"></div>

        <section className='slide-image  '>
          <div className='slide-text'>
            <h1>Quem Somos ?</h1>
            <p>Presente no mercado há mais de 50 anos, a Só-Frio oferece aos seus clientes soluções que compatibilizam economia e tecnologia.
              Ao longo desses 50 anos, a Só-Frio forneceu e instalou sistemas para beneficiar indústrias, hospitais, centro administrativos, bancos, teatros, supermercados, hotéis, telecomunicações, residências, entre outros.
              Qualidade, pontualidade, tecnologia e segurança,
              determinam a diretriz da Só-Frio. O perfeito atendimento das necessidades de nossos clientes, aliada a experência e criatividade de nossos profissionais, permite otimizar economicamente o
              investimento a ser realizado.
            </p>
          </div>
          <div>

            <img src={clim} alt="clim" />

          </div>
        </section>

        <div className="white-line"></div>
        <h1 className='title-service'>Soluções em Ar Condicionado!</h1>
        <section className="image-section">
  <div className="child">
    <div className="image-container">
      <img src={logo} className="logo2" alt="Service 1" />
    </div>
  </div>
  <div className="child">
    <div className="image-container">
      <img src={logo} className="logo2" alt="Service 2" />
    </div>
  </div>
  <div className="child">
    <div className="image-container">
      <img src={logo} className="logo2" alt="Service 3" />
    </div>
  </div>
 
  <div className="child">
    <div className="image-container">
      <img src={logo} className="logo2" alt="Service 5" />
    </div>
  </div>
</section>

    

<section className="contact-us-section">
      <div className="contact-container">
        <h2>FAÇA AGORA MESMO SEU ORÇAMENTO!</h2>
        {isSubmitted ? (
          <p className="success-message">Obrigado! Entraremos em contato em breve.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="full-name">Nome Completo</label>
              <input
                type="text"
                id="full-name"
                name="fullName"
                placeholder="Seu nome completo"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && <p className="error-message">{errors.fullName}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Sua empresa"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Seu endereço"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {errors.address && <p className="error-message">{errors.address}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Sua cidade"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Seu telefone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="observations">Observações</label>
              <textarea
                id="observations"
                name="observations"
                rows="4"
                placeholder="Suas observações"
                value={formData.observations}
                onChange={handleChange}
                required
              ></textarea>
              {errors.observations && <p className="error-message">{errors.observations}</p>}
            </div>

            <button type="submit" className="submit-button">Enviar</button>
          </form>
        )}
      </div>
    </section>


      </main>
    </>
  );
}

export default Home;

import { useState, useEffect } from 'react';
import whatsapp from "../assets/whatsapp.png"
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/fixingCar.jpg"
import slide3 from "../assets/slide3.jpg"
import clean from "../assets/clean.jpg"
import fixe from "../assets/fixingcar2.jpg"
import instalation from "../assets/instalation.jpg"
import repair from "../assets/reparation.jpg"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {services} from "../data/service_data"


function Home() {
  // Adding the state for menu toggle

  // Function to toggle the menu
 

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

  const images = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);


  return (
    <>

      <main className="main-container">

       
        <section className="content-wrapper">
          <div className="content">
            {/* <img src={image3} alt="Technician repairing an air conditioner" className="hero-image" /> */}
            <div className="hero-text">
              <h1>Seu conforto e economia, nossa prioridade!</h1>
              <button className="contact-button-content">
              <img src={whatsapp} className="icon-whatsapp" alt="WhatsApp" />
              ENTRE EM CONTATO
            </button>  </div>



          </div>
        </section>

        <section className="who-we-are-section">
          <div className="who-we-are-content">
            <div className="who-we-are-text">
              <h1>Quem Somos?</h1>
              <p>
                A HJH. Prestação de Serviços é especialista em manutenção de sistemas de ar condicionado,
                câmaras frigoríficas e soluções de auto frio. Oferecemos serviços de alta qualidade para garantir
                o seu conforto, economia de energia e prolongar a vida útil dos seus equipamentos.
              </p>
              <button className="cta-button">Conheça Nossos Serviços</button>
            </div>
            <img src={slide2} alt="Air conditioning technician" className=" slider-image who-we-are-image" />
          </div>
        </section>

        <section className="services-section">
          <h1>Principais Serviços que Oferecemos</h1>
          <div className="services-grid">
            {services.map((service, index)=> (
                 <div key={index} className="service-item">
                 <img 
                   className="service-image" 
                   src={service.image} 
                   alt={service.title}
                 />
                 <div className="card-text">
                   <h3>{service.title}</h3>
                   <p>{service.description}</p>
                 </div>
               </div>
            ))}
          </div>
          <button className="cta-button">Fale Conosco para Mais Detalhes</button>
        </section>

        <section className="why-choose-us">
          <h1>Vantagens de Trabalhar Conosco</h1>
          <ul>
            <li><strong>Técnicos Qualificados e Certificados:</strong> Nossa equipe é composta por profissionais com vasta experiência.</li>
            <li><strong>Atendimento Rápido e Eficiente:</strong> Garantimos respostas ágeis para que o seu conforto não seja comprometido.</li>
            <li><strong>Peças Originais e de Alta Qualidade:</strong> Utilizamos somente peças de qualidade superior.</li>
            <li><strong>Soluções Personalizadas:</strong> Desenvolvemos planos de manutenção ajustados às suas necessidades.</li>
          </ul>
        </section>





        <section className="extend-equipment">
          <h1>Prolongue a Vida Útil dos Seus Equipamentos</h1>
          <p>
            Prolongue a vida útil dos seus equipamentos de refrigeração com uma manutenção regular e especializada.
            Seja no seu carro, empresa, ou casa, a HJH. Prestação de Serviços está pronta para garantir o máximo desempenho.
          </p>
          <button className="cta-button">Saiba Mais</button>
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

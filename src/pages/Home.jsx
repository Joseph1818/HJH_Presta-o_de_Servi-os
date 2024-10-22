import whatsapp from "../assets/whatsapp.png"
import man_car from "../assets/woman.jpg"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { services } from "../data/service_data"


function Home() {


  return (
    <>
      <main className="main-container">
        <section className="content-wrapper">
          <div className="content">
            {/* <img src={image3} alt="Technician repairing an air conditioner" className="hero-image" /> */}
            <div className="hero-text">
              <h1>Seu conforto e economia, nossa prioridade!</h1>
              <button
                className="contact-btn"
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
              <button className="cta-button"
                onClick={() => {
                  document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >Conheça Nossos Serviços</button>
            </div>
            <img src={man_car} alt="Air conditioning technician" className=" slider-image who-we-are-image" />
          </div>
        </section>

        <section id='services-section' className="services-section">
          <h1>Principais Serviços que Oferecemos</h1>
          <div className="services-grid">
            {services.map((service, index) => (
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
          <button className="cta-button"
            onClick={() => {
              window.open(
                'https://wa.me/244944691783?text=Olá,%20gostaria%20de%20mais%20detalhes%20sobre%20os%20serviços!',
                '_blank'
              );
            }}
          >Fale Conosco para Mais Detalhes</button>
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
        </section>
      </main>
    </>
  );
}

export default Home;

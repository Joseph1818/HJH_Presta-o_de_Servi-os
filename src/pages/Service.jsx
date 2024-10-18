
import fixe from "../assets/smiling.jpg"

import {services} from "../data/service_data"

function Service() {
    return (
      <>
     
      <main className="main-container ">
        <section 
          className="hero"
          style={{ backgroundImage: "url('assets/team.jpg')" }}
        >
          <div className="hero-content">
            <h1>PRINCIPAIS SERVIÇOS QUE OFERECEMOS</h1>
          </div>
        </section>

        <section className="who-we-are-section">
            <div className=" who-we-are-content">
              <div className="who-we-are-text">
                <h2>NOSSOS SERVIÇOS</h2>
                <p>
                  Oferecemos uma gama completa de serviços de refrigeração e climatização para garantir o conforto e a eficiência dos seus equipamentos.
                </p>
              </div>
              <div >
                <img 
                className="who-we-are-image"
                src={fixe}
                  alt="Nossos Serviços"
                />
              </div>
            </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="services-grid ">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <img 
                    className="service-image" 
                    src={service.image} 
                    alt={service.title}
                  />
                  <div className="card-text ">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

  
      </>
    );
  }
  
  export default Service;
  
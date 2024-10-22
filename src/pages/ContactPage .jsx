import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  // State to capture form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Constructing the mailto URL
    const mailtoLink = `mailto:geral@hjh.ao?subject=Contato de ${name}&body=Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    
    // Opening the default email client
    window.location.href = mailtoLink;

    // Optionally, clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Entre em Contato Conosco</h1>
        <p>Estamos aqui para responder suas dúvidas e fornecer mais informações sobre nossos serviços.</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h2>Mande uma Mensagem</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="cta-button">Enviar Mensagem</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Informações de Contato</h2>
          <div className="info-item">
            <FaPhone className="contact-icon" />
            <p>+244 944 691 783 / 951 665 322</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <p>info@hjhservices.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Rua Exemplo, Bairro Exemplo, Cidade Exemplo, Angola</p>
          </div>
          <div className="info-item">
            <FaWhatsapp className="contact-icon" />
            <a
              href="https://wa.me/244944691783"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Optional Map Section */}
      <div className="contact-map">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537363153164!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2fbbbf7%3A0x5045675218ce7e0!2zRXhhbXBsZSwgUGxhY2Vob2xkZXIsIEFuZ29sYQ!5e0!3m2!1sen!2sus!4v1634133820498!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;

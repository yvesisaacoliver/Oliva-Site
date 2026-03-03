import React, { useState } from 'react';
import "../styles/Footer.css"
import envelope from "../assets/envelope.png"
import facebook from "../assets/svg/fb.svg"
import Instagram from "../assets/svg/insta.svg"
import Linkedin from "../assets/svg/in.svg"
import Telegram from "../assets/svg/telegram.svg"
import Medium from "../assets/svg/medium.svg"
import tweeter from "../assets/svg/x.svg"
import C from "../assets/svg/C.svg"
import Liability from "../assets/liabilitycompany.png"
import Designrush from "../assets/svg/Designrush.svg"

const Footer = () => {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="footer-newsletter">
      <div className="newsletter-content">
        <div className="newsletter-left">
          <img
            src={envelope}
            alt="Envelope Icon"
            className="newsletter-icon"
          />
        </div>
        <div className="newsletter-right">
          <h2 className="newsletter-title">Receba insights de marketing, tech e dados</h2>
          <p className="newsletter-subtitle"></p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="Inscrever" className="newsletter-submit">
              Inscrever
            </button>
          </form>
        </div>
      </div>
      {submitted && <p className="thank-you-message">Thank you for subscribing!</p>}

      <hr className="footer-line" />

      {/* Main Content */}
      <div className="footer-content">

        {/* Left Side */}
        <div className="footer-left">
          <a className="footer-logo"><img src={C} alt="C" /></a>
          <div className="footer-text">
            Arandu <br />
          </div>
        </div>

        {/* Right Side: Icons */}
        <div className="footer-icons">
          {[
            { src: tweeter, href: "https://twitter.com" },
            { src: facebook, href: "https://facebook.com" },
            { src: Instagram, href: "https://instagram.com" },
            { src: Linkedin, href: "https://linkedin.com" },
            { src: Telegram, href: "https://telegram.org" },
            { src: Medium, href: "https://medium.com" },
          ].map((icon, i) => (
            <div className="icon-box" key={i}>
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={`icon-${i}`} className="icon-img" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="footer-line" />

      {/* Footer Nav */}
      <div className="footerlinks-wrapper">
        <div className="footerlinks-section">
          <h3 className="footerlinks-heading">Marketing</h3>
          <ul className="footerlinks-list">
            <li><a href="#">Estratégia</a></li>
            <li><a href="#">Redes Sociais</a></li>
            <li><a href="#">Tráfego Pago</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Audiovisual</a></li>
            <li><a href="#">Influenciadores</a></li>
            <li><a href="#">Comunidade</a></li>
          </ul>
        </div>

        <div className="footerlinks-section">
          <h3 className="footerlinks-heading">Tecnologia</h3>
          <ul className="footerlinks-list">
            <li><a href="#">Sites, Portais e Sistemas</a></li>
            <li><a href="#">IA e Agentes</a></li>
            <li><a href="#">Integrações e Automação</a></li>
            <li><a href="#">Cloud</a></li>
            <li><a href="#">Segurança e Gestão de Acessos</a></li>
            <li><a href="#">Ferramentas Corporativas</a></li>
          </ul>
        </div>


        <div className="footerlinks-section">
          <h3 className="footerlinks-heading">Dados</h3>
          <ul className="footerlinks-list">
            <li>Dashboards e BI</li>
            <li>Banco de Dados e Engenharia de Dados</li>
            <li>Integração, ETL/ELT</li>
            <li>Métricas e KPIs</li>
          </ul>
        </div>
      </div>

      {/*Line */}
      <hr className="footer-line" />


      {/* Footer Countries  */}
      <div className="contact-section">
        <div className="contact-column">
          <h3 className="contact-title">Contato</h3>
          <p className="contact-email">Comercial@arandu.com</p>
          <p className="contact-email">+55 11 98951-7146</p>

        </div>

        <div className="contact-column">
          <h4 className="location-heading">
            <img src="https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png" alt="USA" className="flag-icon" />
            São Paulo
          </h4>
          <p>Rua Professor Dr. José Marques da Cruz - Jardim das Acacias
<br />São Paulo, Brazil</p>

          <h4 className="location-heading">
          </h4>
          <p></p>
        </div>
      </div>

      {/* Footer copyright  */}
      <div className="coinband-footer">
        <hr />
        <div className="coinband-footer-container">
          <span>Privacy policy</span>
          <span>Public offer</span>
          <span>All rights reserved</span>
          <span>Copyright © 2026 Arandu.</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer

import React, { useState } from 'react';
import "../styles/Footer.css"
import envelope from "../assets/envelope.png"
import facebook from "../assets/svg/fb.svg"
import Instagram from "../assets/svg/insta.svg"
import Linkedin from "../assets/svg/in.svg"
import Telegram from "../assets/svg/telegram.svg"
import Medium from "../assets/svg/medium.svg"
import tweeter from "../assets/svg/x.svg"
import D from "../assets/svg/D.svg"

const Footer = () => {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': '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',
        },
        body: JSON.stringify({ email, updateEnabled: true }),
      });
      if (res.ok || res.status === 204) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.message || 'Erro ao inscrever. Tente novamente.');
      }
    } catch {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
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
          {submitted ? (
            <p className="thank-you-message">Agradecemos sua inscrição!</p>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-submit" disabled={loading}>
                {loading ? 'Inscrevendo...' : 'Inscrever'}
              </button>
            </form>
          )}
          {error && <p className="newsletter-error">{error}</p>}
        </div>
      </div>

      <hr className="footer-line" />

      {/* Main Content */}
      <div className="footer-content">

        {/* Left Side */}
        <div className="footer-left">
          <a className="footer-logo"><img src={D} alt="D" /></a>
          <div className="footer-text">
            Oliva <br />
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
          <h3 className="footerlinks-heading">Contato</h3>
          <ul className="footerlinks-list">
            <li><a href="mailto:comercial@oliva-agency.com.br">comercial@oliva-agency.com.br</a></li>
            <li><a href="tel:+5511989517146">+55 11 98951-7146</a></li>
          </ul>
        </div>

        <div className="footerlinks-section">
          <h3 className="footerlinks-heading">
            <img src="https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png" alt="Brazil" className="flag-icon" />{" "}
            São Paulo
          </h3>
          <ul className="footerlinks-list">
            <li>Rua Professor Dr. José Marques da Cruz - Jardim das Acacias</li>
            <li>São Paulo, Brazil</li>
          </ul>
        </div>
      </div>

      {/* Footer copyright  */}
      <div className="coinband-footer">
        <hr />
        <div className="coinband-footer-container">
          <span>Privacy policy</span>
          <span>All rights reserved</span>
          <span>Copyright © 2026 Oliva.</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer

import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/svg/logo.svg";
import hamburger from "../assets/svg/hamburger.svg";
import closeIcon from "../assets/close.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <a href='/' className="icon"><img className="logo-img" src={logo} alt="logo" /></a>
        </div>
      </div>

      <nav className={`nav-links ${menuOpen ? 'mobile-menu-open' : ''}`}>
        {/* Mobile Close Button */}
        <img 
          src={closeIcon} 
          alt="Close menu" 
          className="mobile-close-btn"
          onClick={() => setMenuOpen(false)}
        />

        <div className="nav-item dropdown">
          Marketing <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="./Service" onClick={() => setMenuOpen(false)}>Estratégia</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Redes Sociais</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Tráfego Pago</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>SEO</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Audiovisual</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Influenciadores</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Comunidade</a>
          </div>
        </div>

        <div className="nav-item dropdown">
          Tech <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="./Service" onClick={() => setMenuOpen(false)}>Sites, Portais e Sistemas</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>IA e Agentes</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Integrações e Automação</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Cloud</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Segurança e Gestão de Acessos</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Ferramentas Corporativas</a>
          </div>
        </div>

        <div className="nav-item dropdown">
          Dados <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="./Service" onClick={() => setMenuOpen(false)}>Dashboards e BI</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Banco de Dados e Engenharia de Dados</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Integração, ETL/ELT</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Métricas e KPIs</a>
          </div>
        </div>
        <div className="nav-item">
          <a href="#" onClick={(e) => handleClick(e, 'blog-section')}>Blog</a>
        </div>

        <div className="nav-item">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link>
        </div>
      </nav>

      <div className="navbar-right">
        <button className="contact-btn">Fale Conosco</button>
        <img
          className="navicon"
          src={hamburger}
          alt="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
        />
      </div>
    </header>
  );
};

export default Navbar;
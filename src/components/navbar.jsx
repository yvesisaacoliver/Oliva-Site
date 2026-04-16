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
      </nav>
    </header>
  );
};

export default Navbar;
import React from 'react'
import "../styles/Hero.css"
import animation from "../assets/animation-hero.mp4"

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">SUA MARCA MERECE MAIS</h1>
          <p className="hero-subtitle">Conexão real entre sua marca e seu público.</p>
          <button className="hero-button" onClick={() => window.open('https://wa.me/5511989517146', '_blank')}>Solicitar Proposta</button>
          <p className="hero-description">
            A Oliva une criação de marca, marketing, tecnologia e dados para gerar conexão real entre sua marca e seu público, fortalecendo presença, atraindo os clientes certos e transformando relacionamento em resultado.
          </p>
        </div>
        <div className="hero-right">
          <video
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
            src={animation}
            alt="Video Description"
          >
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

    </div>
  )
}

export default Hero

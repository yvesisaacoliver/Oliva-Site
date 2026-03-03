import React from 'react'
import "../styles/Hero.css"
import animation from "../assets/animation-hero.mp4"

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">MARKETING, TECNOLOGIA E DADOS</h1>
          <p className="hero-subtitle">Soluções digitais para acelerar seu crescimento</p>
          <button className="hero-button">Solicitar Proposta</button>
          <p className="hero-description">
            A Arandu é uma consultoria digital que une marketing, tecnologia e dados para desenvolver ferramentas sob medida para atrair e atender clientes, automatizar e otimizar processos, e transformar dados em dashboards que revelam os números do seu negócio e apoiam decisões mais inteligentes.
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

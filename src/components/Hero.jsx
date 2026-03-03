import React from 'react'
import "../styles/Hero.css"
import animation from "../assets/animation-hero.mp4"

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">MARKETING, TECNOLOGIA E DADOS</h1>
          <p className="hero-subtitle">Soluções digitais para impulsionar o crescimento do seu negócio</p>
          <button className="hero-button">Solicitar Proposta</button>
          <p className="hero-description">
            Unimos marketing, tecnologia e dados para transformar desafios em oportunidades de crescimento. Da atração de clientes à automação de processos e à análise dos indicadores do seu negócio, desenvolvemos soluções sob medida para tornar sua empresa mais estruturada, eficiente e preparada para o próximo nível.
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

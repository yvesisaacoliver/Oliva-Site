import React from 'react'
import getintouchimg from "../assets/footer.webp"
import "../styles/getInTouch.css"

const GetInTouch = () => {
  return (
    <div className='getintouch'>
      <div className='getintouch-img'>
        <img src={getintouchimg} alt="getintouchimg" />
      </div>
      <div className="contact-us-container">
        <h1 className="contact-us-heading">Vamos tirar seu projeto do papel?</h1>
        <p className="contact-us-description">
          Conte o que você precisa e a gente monta um plano com estratégia, prazos e orçamento.
        </p>
        <a href="https://wa.me/5511989517146" target="_blank" rel="noopener noreferrer" className="contact-us-button">
          Solicitar proposta
        </a>
      </div>
    </div>
  )
}

export default GetInTouch
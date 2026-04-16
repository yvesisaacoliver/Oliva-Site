import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/HowWeAchieveResults.css';
import img1 from "../assets/acheive1.svg";
import img2 from "../assets/acheive2.svg";
import img3 from "../assets/acheive3.svg";
import img4 from "../assets/acheive4.svg";

gsap.registerPlugin(ScrollTrigger);

const HowWeAchieveResults = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Set initial state (hidden)
    gsap.set([headingRef.current, descRef.current, ...cardRefs.current], {
      x: 100,
      opacity: 0
    });

    // Section appearance control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
        onEnter: () => animateIn(),
        onLeaveBack: () => animateOut()
      }
    });

    function animateIn() {
      tl.to(sectionRef.current, { opacity: 1, duration: 0.5 })
        .to(headingRef.current, { x: 0, opacity: 1, duration: 0.8 }, 0)
        .to(descRef.current, { x: 0, opacity: 1, duration: 0.8 }, 0.3)
        .to(cardRefs.current, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        }, 0.6);
    }

    function animateOut() {
      gsap.to(sectionRef.current, { opacity: 0, duration: 0.5 });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const achievements = [
    { img: img1, title: "Dashboards e BI", desc: "Dashboards e BI para reunir os principais indicadores em um só lugar, facilitar leituras rápidas, comparar metas, identificar gargalos e agir com rapidez diante dos desvios." },
    { img: img2, title: "Banco de Dados e Engenharia de Dados", desc: "Estruturamos banco de dados e pipelines para centralizar informações com segurança e escala. Base única para BI, relatórios e automações." },
    { img: img3, title: "Métricas e KPIs", desc: "Definimos métricas e KPIs que importam para o seu negócio. Acompanhamento de funil, vendas e operação para melhorar resultado e previsibilidade." },
    { img: img4, title: "Integração e ETL/ELT", desc: "Integramos sistemas e automatizamos ETL/ELT para atualizar dados sem esforço manual. Dados limpos e consistentes para relatórios sempre prontos." },
  ];

  return (
    <div
      className="howWeAchieveResults"
      ref={sectionRef}
      style={{ overflow: 'hidden' }}
    >
      <h2 className="title" ref={headingRef}>
        Soluções de Dados
      </h2>
      <p className="description" ref={descRef}>
         Visibilidade sobre os números do negócio: de vendas, custos e margens a estoque, operação e desempenho para decidir melhor, corrigir rotas e planejar com mais confiança.      </p>

      <div className="results-grid">
        {achievements.map((item, index) => (
          <div
            className="result-item"
            key={index}
            ref={el => cardRefs.current[index] = el}
          >
            <img src={item.img} alt="achievement icon" className="result-img" />
            <div className="result-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeAchieveResults;
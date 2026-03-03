import React, { useEffect, useRef } from 'react';
import styles from '../styles/IndustriesSection.module.css';
import img1 from "../assets/serv1.png";
import img2 from "../assets/serv2.webp";
import img3 from "../assets/serv-3.webp";
import img4 from "../assets/serv4.png";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const services = [
    {
      title: 'Sites, Portais e Sistemas',
      description: 'Sites modernos que atraem clientes, portais que organizam a operação e sistemas que acompanham o crescimento do negócio.',
      icon: img1,
    },
    {
      title: 'IA e Agentes',
      description: 'Agentes e automações inteligentes para reduzir trabalho manual, acelerar processos e ampliar a produtividade.',
      icon: img2,
    },
    {
      title: 'Cloud, Deploy & Performance',
      description: 'Infraestrutura em cloud e deploy confiável, com ambientes bem configurados para garantir escalabilidade, estabilidade e eficiência de custo.',
      icon: img3,
    },
    {
      title: 'Integrações & Automação',
      description: 'Integração de APIs, CRM e sistemas para automatizar pedidos, pagamentos, notificações e fluxos, tornando a operação mais eficiente.',
      icon: img4,
    },
    {
      title: 'Segurança e Gestão de Acessos',
      description: 'Estrutura de segurança e gestão de acessos para proteger ambientes, reduzir riscos de incidentes e reforçar a confiabilidade da operação.',
      icon: img4,
    },
    {
      title: 'Ferramentas Corporativas',
      description: 'Ambientes corporativos para centralizar informações, alinhar times, estruturar processos e dar mais fluidez à rotina.',
      icon: img4,
    },

  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { x: '100%', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
          once: true, // this will not actually work in GSAP; workaround below
          onEnter: () => {
            gsap.to(sectionRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
            });
          },
        },
      }
    );
  }, []);



  return (
    <section className={styles.industriesWrapper} >
      <div className={styles.industriesSection} ref={sectionRef}>
        <h2 className={styles.heading}>
          Soluções de Tecnologia
        </h2>
        <p className={styles.description}>
           Estrutura digital para operar com mais eficiência, segurança e escalabilidade, de sites e sistemas à infraestrutura cloud, automação e governança.
        </p>
      </div>

      <div className={styles.servicesSection}>
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <img src={service.icon} alt={`${service.title} Icon`} className={styles.icon} />
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.carddescription}>{service.description}</p>
              <a href="#" className={styles.link}>Learn more...</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

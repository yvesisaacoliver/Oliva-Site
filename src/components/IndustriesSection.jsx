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
      description: 'Desenvolvimento de sites, portais e sistemas sob medida. UX/UI, performance e integrações para atrair clientes, organizar processos e escalar.',
      icon: img1,
    },
    {
      title: 'IA e Agentes',
      description: 'Automação com IA e agentes inteligentes para reduzir trabalho manual. Assistentes que entendem contexto, executam tarefas e aumentam produtividade.',
      icon: img2,
    },
    {
      title: 'Cloud, Deploy & Performance',
      description: 'Infraestrutura em cloud com ambientes bem configurados e escaláveis. Deploy confiável, estabilidade e base pronta para crescer com segurança.',
      icon: img3,
    },
    {
      title: 'Integrações & Automação',
      description: 'Integramos APIs, CRM e sistemas para eliminar retrabalho. Automatizamos pedidos, pagamentos, notificações e fluxos com rastreabilidade.',
      icon: img4,
    },
    {
      title: 'Segurança e Gestão de Acessos',
      description: 'Segurança aplicada com controle de acessos (IAM). MFA, permissões, auditoria e boas práticas para proteger dados e reduzir riscos.',
      icon: img4,
    },
    {
      title: 'Ferramentas Corporativas',
      description: 'Configuramos e organizamos ferramentas corporativas (Jira/Confluence, Microsoft 365, e catálogos). Processos padronizados e operação mais eficiente.',
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
          Desenvolvemos sites e sistemas, automatizamos processos, colocamos sua infraestrutura em cloud e reforçamos segurança. Tudo com performance, monitoramento e governança para crescer com estabilidade.
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

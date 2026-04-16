"use client";
import React, { useState } from "react";
import styles from "../styles/MarketingTabsSection.module.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import MarketingCard from "../components/MarketingCard";
import serv1 from "../assets/serv1.avif";
import serv2 from "../assets/serv2.avif";
import serv3 from "../assets/serv3.webp";
import serv4 from "../assets/serv4.avif";
import serv5 from "../assets/serv5.avif";
import serv6 from "../assets/serv6.avif";
import serv7 from "../assets/serv7.webp";

// ⚠️ TROQUE PELO SEU NÚMERO (código do país + DDD + número, sem espaços)
const WHATSAPP_NUMBER = "5511989517146";

const tabs = [
  {
    title: "Estratégia",
    img: serv3,
    description:
      "Entendimento do negócio, do público, da oferta e do processo comercial para definir os canais e ações com maior potencial para a empresa.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o serviço de Estratégia.",
  },
  {
    title: "Redes Sociais",
    img: serv1,
    description:
      "Conteúdo e presença contínua, com linguagem e identidade visual consistentes, para manter a marca ativa, relevante e próxima do público.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o serviço de Redes Sociais.",
  },
  {
    title: "Tráfego Pago",
    img: serv4,
    description:
      "Campanhas pagas direcionadas ao público certo para gerar demanda e criar novas oportunidades de negócio no curto prazo.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o serviço de Tráfego Pago.",
  },
  {
    title: "SEO",
    img: serv7,
    description:
      "Otimização do site e dos conteúdos para ampliar a visibilidade no Google e atrair tráfego qualificado de forma orgânica.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o serviço de SEO.",
  },
  {
    title: "Comunidade",
    img: serv2,
    description:
      "Desenvolvimento de comunidade em torno da marca para fortalecer conexão, confiança e proximidade com o público.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o serviço de Comunidade.",
  },
  {
    title: "Audiovisual",
    img: serv5,
    description:
      "Conteúdos audiovisuais desenvolvidos para tornar a marca mais marcante, desejável e bem posicionada.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o serviço de Audiovisual.",
  },
  {
    title: "Influenciadores",
    img: serv6,
    description:
      "Campanhas com influenciadores para transferir atenção, confiança e relevância para a marca.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o serviço de Influenciadores.",
  },
];

const MarketingTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.marketingWrapper}>
      <h2 className={styles.mainHeading}>Soluções de Marketing</h2>
      <p className={styles.smallBottom}>
        Selecione um serviço e veja como ele contribui para o crescimento da sua
        empresa.
      </p>

      <div className={styles.contentGrid}>
        <div className={styles.tabsList}>
          {tabs.map((tab, index) => (
            <div key={index} className={styles.tabArrowWrapper}>
              <div
                className={`${styles.tabItem} ${
                  index === activeTab ? styles.active : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span>{tab.title}</span>
              </div>
              <div className={styles.arrowbox}>
                <LiaLongArrowAltRightSolid
                  size="1.5vw"
                  className={`${styles.arrow} ${
                    index === activeTab ? styles.rotate : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cardContainer}>
          <MarketingCard
            image={tabs[activeTab].img}
            title={tabs[activeTab].title}
            description={tabs[activeTab].description}
            whatsappNumber={WHATSAPP_NUMBER}
            whatsappMsg={tabs[activeTab].whatsappMsg}
          />
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
};

export default MarketingTabsSection;
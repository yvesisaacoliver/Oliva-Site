"use client";
import React, { useState } from "react";
import styles from "../styles/MarketingTabsSection.module.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import MarketingCard from "../components/MarketingCard";
import serv1 from "../assets/serv1.avif"
import serv2 from "../assets/serv2.avif"
import serv3 from "../assets/serv3.webp"
import serv4 from "../assets/serv4.avif"
import serv5 from "../assets/serv5.avif"
import serv6 from "../assets/serv6.avif"
import serv7 from "../assets/serv7.webp"

const tabs = [
   {
    title: "Estratégia",
    img: serv3,
    description: "Entendemos seu negócio, público, oferta e processo de venda. A partir disso, criamos uma estratégia de marketing digital com prioridades, canais e metas para transformar marketing em receita."
  },

    {
    title: "Redes Sociais",
    img: serv1,
    description: "Criamos uma presença forte nas redes, com planejamento e execução. Definimos linguagem, pauta e identidade visual. Publicamos com foco em autoridade, engajamento e geração de demanda."
  },

   {
    title: "Tráfego Pago",
    img: serv4,
    description: "Gerenciamos anúncios online para vender mais. Google Ads, Meta Ads, e TikTok Ads com testes, otimização semanal e foco em conversão, receita e ROI."
  },

    {
    title: "SEO",
    img: serv7,
    description: "Melhoramos seu posicionamento no Google com SEO técnico, páginas otimizadas e conteúdo estratégico. Foco em conversão, tráfego orgânico qualificado e crescimento no médio prazo."
  },
  
  {
    title: "Comunidade",
    img: serv2,
    description: "Construímos uma comunidade em torno da sua marca para gerar confiança e recorrência. Criamos rotinas de interação, conteúdo e suporte para fortalecer relacionamento."
  },


  {
    title: "Audiovisual",
    img: serv5,
    description: "Produção audiovisual para fortalecer sua marca e aumentar conversão. Criamos fotos, vídeos e edição com identidade consistente, ideal para redes sociais, anúncios e materiais institucionais."
  },

  {
    title: "Influenciadores",
    img: serv6,
    description: "Fazemos marketing de influência com influenciadores alinhados ao seu público. Cuidamos de seleção, negociação, briefing e acompanhamento para gerar alcance qualificado e conversão."
  },

];


const MarketingTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.marketingWrapper}>
      <h2 className={styles.mainHeading}>
        Soluções de Marketing
      </h2>
      <p className={styles.smallBottom}>
        Selecione um serviço e veja como transformamos marketing em resultados
      </p>

      <div className={styles.contentGrid}>
        <div className={styles.tabsList}>
          {tabs.map((tab, index) => (
            <div key={index} className={styles.tabArrowWrapper}>
              <div
                className={`${styles.tabItem} ${index === activeTab ? styles.active : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span>{tab.title}</span>
              </div>
              <div className={styles.arrowbox}>
                <LiaLongArrowAltRightSolid size="1.5vw"
                  className={`${styles.arrow} ${index === activeTab ? styles.rotate : ""}`}
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
          />
        </div>
      </div>
      <div className="line"></div>

    </section>
  );
};

export default MarketingTabsSection;
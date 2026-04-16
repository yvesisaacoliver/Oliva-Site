"use client";
import React from "react";
import styles from "../styles/MarketingCard.module.css";
const MarketingCard = ({ image, title, description, whatsappNumber, whatsappMsg }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.learnMore}
        >
          Fale com um especialista
        </a>
      </div>
    </div>
  );
};

export default MarketingCard;
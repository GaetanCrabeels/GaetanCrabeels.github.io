import React, { useState, useEffect } from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mettre en place un délai pour déclencher l'affichage progressif
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Modifier ce délai selon vos préférences

    // Nettoyer le timeout lors du démontage du composant
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.title} ${isVisible ? styles.visible : ''}`}>Bonjour,</div>
        <div className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>Bienvenue sur mon Portfolio</div>
        <p className={`${styles.description} ${isVisible ? styles.visible : ''}`}>
          <span>Je suis un développeur junior polyvalent.</span>
          <br />
          <br />
          <span>Orienté back-end et création de jeux vidéos.</span>
        </p>
        <a href="mailto:gaetancrabeels@ehotmail.com" className={`${styles.contactBtn} ${isVisible ? styles.visible : ''}`}>
          Contactez moi par mail
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${isVisible ? styles.visible : ''}`}
      />
      <div className={`${styles.topBlur} ${isVisible ? styles.visible : ''}`} />
      <div className={`${styles.bottomBlur} ${isVisible ? styles.visible : ''}`} />
    </section>
  );
};

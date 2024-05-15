import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Description</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Ambiance relax"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/3d.png")} alt="3D icon" className={styles.image3D}/>
            <div className={styles.aboutItemText}>
              <h3>Développeur 3D</h3>
              <p>
                Expérience avec Unity en réalissant des environnements VR 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Développeur Front-end</h3>
              <p>
                Multiples projets à mon actif concernant de la domotique, des jeux vidéos, de la bureautique 
                ainsi que des sites webs et applications mobiles.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Dévoppeur Back-end</h3>
              <p>
                Réalisation d'endpoint et d'APIs via l'utilisation de PostMan en test, Swagger lors du développement.
                Mise en place de la structure de site web.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Développeur UX</h3>
              <p>
                Sensibilisation aux personnes atypiques en créant des sites webs adaptés.
                <br></br>
                (Thèmes de couleurs modifiables,Speech-To-Text et vice-versa)
               </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

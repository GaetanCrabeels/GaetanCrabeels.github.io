import React from 'react';
import styles from "./Summary.module.css";
import projectsData from '../../data/project.json'

const Summary = ({ isVisible, toggleVisibility }) => {
  return (
    <div>
      <nav>
        {/* Votre barre de navigation */}
      </nav>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={toggleVisibility}>
          {isVisible ? 'Masquer tableau récapitulatif' : 'Afficher tableau récapitulatif'}
        </button>
      </div>
      <div className={`${styles.summaryContainer} ${isVisible ? styles.visible : styles.invisible}`}>
        <div className={styles.summaryContent}>
          <h2>Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Titre du Projet</th>
                <th>Date de début</th>
                <th>Date de fin</th>
                <th>Heures estimées</th>
                <th>Heures valorisées</th>
                <th>Certificat</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) => (
                <tr key={index}>
                  <td>{project.title}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                  <td>{project.estimatedHours}</td>
                  <td>{project.actualHours}</td>
                  <td>
                    {/* Lien pour télécharger le document certifiant l'activité */}
                    <a href={project.certificateUrl}>
                      <img className='certifIcon' src="https://img.freepik.com/vecteurs-premium/icone-certificat-isole-fond-blanc-illustration-vectorielle_736051-172.jpg?w=826" style={{ width: '30px'}} alt="Icône Certificat" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;

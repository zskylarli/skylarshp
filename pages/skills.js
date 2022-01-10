import React, { useState }  from 'react';
import styles from './styles/skills.module.css';
import Rain from './elements/rain.js';

export default function About() {
  const [skills, skillsOpened] = useState(false);
  const [features, featuresOpened] = useState(false);
  const [projects, projectsOpened] = useState(false);

  return(
    <div>
      <div className="rain">
        <Rain />
      </div>
      <div className="umbrellas">
      <div className={styles.umbrella}  onMouseEnter={() => {skillsOpened(true);}} onMouseLeave={() => {skillsOpened(false);}}>
        <div className={styles.stick}></div>
        <div className={styles.panel}></div>
      </div>
      <div className={styles.umbrella}  onMouseEnter={() => {featuresOpened(true);}} onMouseLeave={() => {featuresOpened(false);}}>
        <div className={styles.panel}></div>
        <div className={`${styles.stick} ${styles.stickfront}`}></div>
      </div>
      <div className={styles.umbrella}  onMouseEnter={() => {projectsOpened(true);}} onMouseLeave={() => {projectsOpened(false);}}>
        <div className={styles.panel}></div>
        <div className={`${styles.stick} ${styles.stickleft}`}></div>
      </div>
      {!skills && <div className="skills">
        <h1>SKILLS</h1>
        <p>JAVASCRIPT / JAVA / PYTHON / HTML+CSS / MATLAB / SQL /
        <br></br>MONGODB  / EXPRESS.JS / REACT.JS / NODE.JS / PROCESSING /
        <br></br>SOLIDWORKS / LTSPICE / AI / PHOTOSHOP / FIGMA</p>
      </div>}
      {!features && <div className="features">
        <h1>FEATURES</h1>
        <p>NEUT MAGAZINE<br></br>COLUMBIA ENGINEERING<br></br>MASASON FOUNDATION<br></br>BUSINESS INSIDER JAPAN<br></br>MIRAI-NO-MANABI</p>
      </div>}
      {!projects && <div className="project">
        <h1>PROJECTS</h1>
        <p>MYMET: <br></br>TRIP-PLANNER FOR THE MET MADE WITH REACT</p>
        <p>BACTERIAGAN: <br></br> BACTERIAL IMAGE GENERATOR</p>
        <p>@CHIAOSKYURO: <br></br> DIGITAL ART</p>
      </div>}
      </div>
    
    <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;700;900&display=swap');
    h1 {
      font-size: 18px;
      font-family: 'Mulish', sans-serif;
      font-weight: 700;
      color: #0c1b22;
    }
    p {
      font-size: 15px;
      font-family: 'Mulish', sans-serif;
      font-weight: 400;
      color: #0c1b22;
    }
    .rain {
      z-index: -10;
    }
    .umbrellas {
      z-index: 3;
    }
    .skills {
      position: absolute;
      text-align: center;
      width: 195px;
      top: 70vh;
      left: 25.1%;
      transform: translateX(-50%);
      line-height: 1.5;
    }
    .features {
      position: absolute;
      text-align: center;
      width: 195px;
      top: 70vh;
      left: 50.1%;
      transform: translateX(-50%);
      line-height: 1.5;
    }
    .project {
      position: absolute;
      text-align: center;
      width: 195px;
      top: 70vh;
      left: 75.1%;
      transform: translateX(-50%);
      line-height: 1.2;
    }
    `}</style>
    </div>
  )
}

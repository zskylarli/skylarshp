import React from 'react';
import styles from './styles/skills.module.css';
import Rain from './elements/rain.js';

export default function About() {

  return(
    <div>
      <Rain />
      <div className={styles.umbrella}>
        <div className={styles.panel}></div>
        <div className={`${styles.stick} ${styles.stickfront}`}></div>
      </div>
      <div className={styles.umbrella}>
        <div className={styles.panel}></div>
        <div className={styles.stick}></div>
      </div>
      <div className={styles.umbrella}>
        <div className={styles.panel}></div>
        <div className={`${styles.stick} ${styles.stickleft}`}></div>
      </div>
    </div>
  )
}

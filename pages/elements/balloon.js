import React, { useState } from 'react';
import styles from '../styles/balloon.module.css';

export default function Balloon() {
  const [exp1, exp1Opened] = useState(false);
  const [exp2, exp2Opened] = useState(false);
  const [exp3, exp3Opened] = useState(false);
  const [exp4, exp4Opened] = useState(false);
  const [exp5, exp5Opened] = useState(false);

  return(
    <div>
    <div className={styles.balloons}>
      <div className={styles.balloon1}>
        <div className={styles.ball} onMouseEnter={() => {exp1Opened(true); setTimeout(function() {exp1Opened(false)},5000);}}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon2}>
        <div className={`${styles.ball} ${styles.ball2}`} onMouseEnter={() => {exp2Opened(true); setTimeout(function() {exp2Opened(false)},5000);}}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon3}>
        <div className={`${styles.ball} ${styles.ball3}`} onMouseEnter={() => {exp3Opened(true); setTimeout(function() {exp3Opened(false)},5000);}}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon4}>
        <div className={`${styles.ball} ${styles.ball4}`} onMouseEnter={() => {exp4Opened(true); setTimeout(function() {exp4Opened(false)},5000);}}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon5}>
        <div className={`${styles.ball} ${styles.ball5}`} onMouseEnter={() => {exp5Opened(true); setTimeout(function() {exp5Opened(false)},5000);}}></div>
        <div className={styles.stick}></div>
      </div>
    </div>

    {exp1 && <div className={styles.exp1}>
      <h1>Material Science Research 
        @ Kyushu University</h1>
      <p>Awarded the Japan Science and Technology Agency President's Award for martensitic steel research.</p>
      <p>Research abstract PDF here.</p>
    </div>}

    {exp2 && <div className={styles.exp2}>
      <h1>Biomedical Engineering @ Columbia University</h1>
      <p>Minor in Art History; Designated as Egleston Scholar</p>
      <p>Dean's List for all applicable semesters. Funded by Masason Organization.</p>
    </div>}

    {exp3 && <div className={styles.exp3}>
      <h1>Freshman/sophomore internships</h1>
      <p>PlayStation, Procter and Gamble, CyberAgent, University of Tokyo Edge Capital, Empath.</p>
      <p>Gained experience in software engineering, private equity, product development/management, data science, and market research.</p>
    </div>}

    {exp4 && <div className={styles.exp4}>
      <h1>Director 
        @ atelier basi </h1>
      <p>Nonprofit organization providing free mentorship for underpriviledged students in Japan.</p>
      <p>Website at atelierbasi.com .</p>
    </div>}

    {exp5 && <div className={styles.exp5}>
      <h1>Research Analyst Intern @ AllianceBernstein</h1>
      <p>Incoming equity research intern at NYC office.</p>
    </div>}

    <style jsx>{`
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    `}</style>

    </div>
  )

}
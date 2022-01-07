import React from 'react';
import styles from '../styles/stars.module.css';

export default function Stars() {

  return(
  <div>
    <div className={styles.stars}></div>
    <div className={styles.cover}></div>
    <div className={styles.twinkling}></div>
    <div className={styles.email}>
      <div className={`${styles.star} ${styles.twinklestar1}`}></div>
      <div className={`${styles.star} ${styles.twinklestar2}`}></div>
      <div className={`${styles.star} ${styles.twinklestar3}`}></div>
      <div className={`${styles.star} ${styles.twinklestar4}`}></div>
      <div className={`${styles.star} ${styles.twinklestar5}`}></div>
      <div className={`${styles.star} ${styles.twinklestar7}`}></div>
      <div className={`${styles.line} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.line2}`}></div>
      <div className={`${styles.line} ${styles.line3}`}></div>
      <div className={`${styles.line} ${styles.line4}`}></div>
      <div className={`${styles.line} ${styles.line6}`}></div>
      <div className={`${styles.line} ${styles.line7}`}></div>
    </div>
    <div className={styles.triangle}>
      <div className={`${styles.star} ${styles.trianglestar1}`}></div>
      <i className="fab fa-twitter fa-8x"></i>
      <div className={`${styles.star} ${styles.trianglestar2}`}></div>
      <i className="fab fa-linkedin fa-6x"></i>
      <div className={`${styles.star} ${styles.trianglestar4}`}></div>
      <i className="fab fa-facebook fa-6x"></i>
      <div className={`${styles.line} ${styles.triangleline1}`}></div>
      <div className={`${styles.line} ${styles.triangleline2}`}></div>
      <div className={`${styles.line} ${styles.triangleline3}`}></div>
    </div>

    <style jsx>{`
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
    @import url(https://use.fontawesome.com/releases/v5.3.1/css/all.css);
    .fab {
      opacity: 0.2;
      filter: blur(0.3rem);
      color: lightblue;
      position: absolute;
    }

    .fa-twitter {
      right: 2%;
      top: 24.5%;
      transform: rotate(65deg);
    }

    .fa-linkedin {
      right: 66%;
      top: 93.5%;
      transform: rotate(105deg);
    }

    .fa-facebook {
      left: 11%;
      top: 5.8%;
      transform: rotate(80deg);
    }


    `}</style>

  </div>

  )
}

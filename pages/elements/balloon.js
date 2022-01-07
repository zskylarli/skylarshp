import React from 'react';
import styles from '../styles/balloon.module.css';

export default function Balloon() {

  return(
    <div>
    <div className={styles.balloons}>
      <div className={styles.balloon1}>
        <div className={styles.ball}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon2}>
        <div className={`${styles.ball} ${styles.ball2}`}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon3}>
        <div className={`${styles.ball} ${styles.ball3}`}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon4}>
        <div className={`${styles.ball} ${styles.ball4}`}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    <div className={styles.balloons}>
      <div className={styles.balloon5}>
        <div className={`${styles.ball} ${styles.ball5}`}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
    </div>
  )

}
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import styles from './styles/experiences.module.css';
import Balloon from './elements/balloon.js';

export default function Experiences() {

  return(
    <div>
    <div className={styles.paperplane}>
      <div className={styles.plane}>
        <div className={styles.wingRight}></div>
        <div className={styles.wingLeft}></div>
        <div className={styles.bottom}></div>
        <div className={styles.top}></div>
        <div className={styles.middle}></div>
      </div>
    </div>
    <Balloon />
    </div>
  )

}
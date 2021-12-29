import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import styles from './styles/about.module.css';

export default function About() {
  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 }, 
    delay: 400, 
    reset: false,
    loop: false,
    config: { 
      mass: 0.2, tension: 100, friction: 20, velocity: 0.02
    }
  })

  return(
    <animated.div style={props}>
    <div className={styles.cloudCircle}>
      <svg width="0" height="0"> 
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
    </div>
    <div className={styles.container}>
      <h1 className={styles.header}>Hi, I'm Skylar!</h1>
      <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </animated.div>
  )
}
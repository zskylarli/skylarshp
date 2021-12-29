import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import styles from './styles/cards.module.css';
import About from './about.js';
import Experiences from './experiences.js';

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck({cardSetter, tapSetter}) {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [tempCard, setCardTemp] = useState(5)
  const [tempTap, setTapTemp] = useState(1)
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity, tap }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    if (tap && xDir < 50) {
      setTapTemp(tempTap+1)
      tapSetter(tempTap)
      setCardTemp(index)
      cardSetter(index)
    }

    api.start(i => {
      if (tap && index !== i) return {
        x: 0,
        y: (300 + window.innerHeight),
        rot: 0,
        scale: 1,
        delay: 200,
        config: { friction: 50, tension: down ? 800 : 500 },
      }
      if (!tap && index !== i) return // We're only interested in changing spring-data for the current spring

      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const y = (tap && tempTap % 2 !== 0) ? -200 : 0
      const rot = mx / 100 + (tap ? 0 : isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      const delay = tap ? 200 : undefined;
      return {
        x,
        y,
        rot,
        scale,
        delay,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })

    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
    
    if (tempTap !== 0 && tempTap % 2 === 0)
    setTimeout(() => {
      gone.clear()
      api.start(i => to(i))
    }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </div>
  )
}

export default function Cards() {
  const [tappedCard, setCard] = useState(0)
  const [tapped, setTap] = useState(1)

  console.log(tappedCard)
  console.log(tapped)

  return (
    <div className={styles.container}>
      <Deck cardSetter={setCard} tapSetter={setTap}/>
      {tapped % 2 !== 0 && tappedCard == 5 && <About />}
      {tapped % 2 !== 0 && tappedCard == 4 && <Experiences />}
      {tapped % 2 !== 0 && tappedCard == 3 && <h1>Works</h1>}
      {tapped % 2 !== 0 && tappedCard == 2 && <h1>Skills</h1>}
      {tapped % 2 !== 0 && tappedCard == 1 && <h1>Contact</h1>}
    </div>
  )
}

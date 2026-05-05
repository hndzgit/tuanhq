"use client";

import styles from './HeroOrbitSystem.module.css';

export default function HeroOrbitSystem() {
  return (
    <div className={styles.orbitSystem}>
      <div className={styles.core}></div>
      
      {/* Orbits & Satellites */}
      <div className={`${styles.orbit} ${styles.orbit1}`}>
        <div className={`${styles.satellite} ${styles.sat1}`}></div>
      </div>
      <div className={`${styles.orbit} ${styles.orbit2}`}>
        <div className={`${styles.satellite} ${styles.sat2}`}></div>
      </div>
      <div className={`${styles.orbit} ${styles.orbit3}`}>
        <div className={`${styles.satellite} ${styles.sat3}`}></div>
      </div>
      
      
      {/* Rings & Hexagons */}
      <div className={`${styles.techHex} ${styles.hex1}`}></div>
      <div className={`${styles.techHex} ${styles.hex2}`}></div>
      <div className={`${styles.techRing} ${styles.ring1}`}></div>
      <div className={`${styles.techRing} ${styles.ring2}`}></div>
    </div>
  );
}

"use client";

import styles from './BgTechIcons.module.css';

export default function BgTechIcons() {
  return (
    <div aria-hidden="true" className={styles.bgTechIcons}>
      <svg className={`${styles.bgHud} ${styles.bgHudSpin} ${styles.bh1}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" opacity="0.3" r="45" stroke="currentColor" strokeWidth="1"></circle>
        <circle cx="50" cy="50" opacity="0.25" r="30" stroke="currentColor" strokeWidth="1"></circle>
        <circle cx="50" cy="50" opacity="0.2" r="15" stroke="currentColor" strokeWidth="1"></circle>
        <line opacity="0.2" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="5" y2="95"></line>
        <line opacity="0.2" stroke="currentColor" strokeWidth="0.5" x1="5" x2="95" y1="50" y2="50"></line>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh2}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" opacity="0.25" r="20" stroke="currentColor" strokeWidth="1.5"></circle>
        <path d="M50 5 L53 20 L47 20Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
        <path d="M50 95 L53 80 L47 80Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
        <path d="M5 50 L20 53 L20 47Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
        <path d="M95 50 L80 53 L80 47Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
        <path d="M18 18 L30 28 L28 30Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
        <path d="M82 82 L70 72 L72 70Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
        <path d="M82 18 L72 28 L70 30Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
        <path d="M18 82 L28 72 L30 70Z" opacity="0.2" stroke="currentColor" strokeWidth="0.8"></path>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh3}`} fill="none" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
        <polyline opacity="0.2" points="0,30 10,30 15,10 20,50 25,20 30,40 35,15 40,45 45,25 50,35 55,10 60,50 65,20 70,40 75,30 80,30 85,15 90,45 95,25 100,35 105,20 110,40 120,30" stroke="currentColor" strokeWidth="1.2"></polyline>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh4}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" opacity="0.2" r="35" stroke="currentColor" strokeWidth="1"></circle>
        <circle cx="50" cy="50" fill="currentColor" opacity="0.15" r="4"></circle>
        <line opacity="0.2" stroke="currentColor" strokeWidth="0.8" x1="50" x2="50" y1="10" y2="35"></line>
        <line opacity="0.2" stroke="currentColor" strokeWidth="0.8" x1="50" x2="50" y1="65" y2="90"></line>
        <line opacity="0.2" stroke="currentColor" strokeWidth="0.8" x1="10" x2="35" y1="50" y2="50"></line>
        <line opacity="0.2" stroke="currentColor" strokeWidth="0.8" x1="65" x2="90" y1="50" y2="50"></line>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh5}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="20" fill="currentColor" opacity="0.2" r="4"></circle>
        <circle cx="20" cy="50" fill="currentColor" opacity="0.2" r="4"></circle>
        <circle cx="80" cy="50" fill="currentColor" opacity="0.2" r="4"></circle>
        <circle cx="35" cy="80" fill="currentColor" opacity="0.2" r="4"></circle>
        <circle cx="65" cy="80" fill="currentColor" opacity="0.2" r="4"></circle>
        <line opacity="0.15" stroke="currentColor" strokeWidth="0.8" x1="50" x2="20" y1="20" y2="50"></line>
        <line opacity="0.15" stroke="currentColor" strokeWidth="0.8" x1="50" x2="80" y1="20" y2="50"></line>
        <line opacity="0.15" stroke="currentColor" strokeWidth="0.8" x1="20" x2="35" y1="50" y2="80"></line>
        <line opacity="0.15" stroke="currentColor" strokeWidth="0.8" x1="80" x2="65" y1="50" y2="80"></line>
        <line opacity="0.15" stroke="currentColor" strokeWidth="0.8" x1="35" x2="65" y1="80" y2="80"></line>
        <line opacity="0.1" stroke="currentColor" strokeWidth="0.8" x1="20" x2="80" y1="50" y2="50"></line>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh6}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="none" opacity="0.2" points="50,10 10,90 90,90" stroke="currentColor" strokeWidth="1"></polygon>
        <polygon fill="none" opacity="0.15" points="50,35 30,75 70,75" stroke="currentColor" strokeWidth="0.8"></polygon>
        <line opacity="0.1" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="90"></line>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh7}`} fill="none" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
        <rect fill="currentColor" height="25" opacity="0.15" rx="1" width="12" x="10" y="50"></rect>
        <rect fill="currentColor" height="45" opacity="0.18" rx="1" width="12" x="28" y="30"></rect>
        <rect fill="currentColor" height="60" opacity="0.2" rx="1" width="12" x="46" y="15"></rect>
        <rect fill="currentColor" height="40" opacity="0.17" rx="1" width="12" x="64" y="35"></rect>
        <rect fill="currentColor" height="55" opacity="0.19" rx="1" width="12" x="82" y="20"></rect>
        <line opacity="0.2" stroke="currentColor" strokeWidth="0.8" x1="5" x2="98" y1="75" y2="75"></line>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bgHudSpin} ${styles.bh8}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="none" opacity="0.25" points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" stroke="currentColor" strokeWidth="1"></polygon>
        <polygon fill="none" opacity="0.18" points="50,25 72,37.5 72,62.5 50,75 28,62.5 28,37.5" stroke="currentColor" strokeWidth="0.8"></polygon>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh9}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50 H30 V20 H60 V50 H80" opacity="0.2" stroke="currentColor" strokeWidth="1"></path>
        <path d="M20 80 H45 V60 H75 V40" opacity="0.15" stroke="currentColor" strokeWidth="0.8"></path>
        <circle cx="30" cy="20" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="60" cy="50" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="45" cy="60" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="80" cy="50" fill="currentColor" opacity="0.15" r="2"></circle>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh10}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="85" fill="currentColor" opacity="0.25" r="4"></circle>
        <path d="M35 70 A22 22 0 0 1 65 70" fill="none" opacity="0.2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2"></path>
        <path d="M25 55 A35 35 0 0 1 75 55" fill="none" opacity="0.17" stroke="currentColor" strokeLinecap="round" strokeWidth="1"></path>
        <path d="M15 40 A50 50 0 0 1 85 40" fill="none" opacity="0.13" stroke="currentColor" strokeLinecap="round" strokeWidth="0.8"></path>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh11}`} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="none" opacity="0.2" points="50,10 90,50 50,90 10,50" stroke="currentColor" strokeWidth="1"></polygon>
        <polygon fill="none" opacity="0.15" points="50,30 70,50 50,70 30,50" stroke="currentColor" strokeWidth="0.8"></polygon>
        <line opacity="0.1" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="90"></line>
        <line opacity="0.1" stroke="currentColor" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="50"></line>
      </svg>
      <svg className={`${styles.bgHud} ${styles.bh12}`} fill="none" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="25" cy="10" fill="currentColor" opacity="0.1" r="3"></circle>
        <circle cx="40" cy="10" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="55" cy="10" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="70" cy="10" fill="currentColor" opacity="0.1" r="3"></circle>
        <circle cx="85" cy="10" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="100" cy="10" fill="currentColor" opacity="0.1" r="3"></circle>
        <circle cx="10" cy="30" fill="currentColor" opacity="0.1" r="3"></circle>
        <circle cx="25" cy="30" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="40" cy="30" fill="currentColor" opacity="0.1" r="3"></circle>
        <circle cx="55" cy="30" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="70" cy="30" fill="currentColor" opacity="0.2" r="3"></circle>
        <circle cx="85" cy="30" fill="currentColor" opacity="0.1" r="3"></circle>
        <circle cx="100" cy="30" fill="currentColor" opacity="0.2" r="3"></circle>
      </svg>
    </div>
  );
}

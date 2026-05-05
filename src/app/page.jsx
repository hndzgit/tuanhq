"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Cpu, 
  Wifi, 
  Cloud, 
  Zap, 
  Glasses, 
  Binary, 
  ScanLine, 
  Building2, 
  Database
} from 'lucide-react';
import HeroOrbitSystem from '@/components/canvas/HeroOrbitSystem';
import Background3DWrapper from '@/components/canvas/Background3DWrapper';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image: 'https://cdn.sanity.io/images/wd53xh69/production/88439824e169ad794a6c10a81c616a4525b5c8ec-1747x1073.png',
      caption: t('projects.p4.title'),
    },
    {
      image: 'https://cdn.sanity.io/images/wd53xh69/production/e4ddfdb3ce3a3ef7486e5cfc9f8c6816222c11c2-1758x1146.png',
      caption: t('services.tab3'),
    },
    {
      image: 'https://cdn.sanity.io/images/wd53xh69/production/1108db6d1e60ad635218cf75a3b5228521bf5731-1699x1042.png',
      caption: t('services.tab5'),
    },
  ];

  const featuredServices = [
    {
      title: t('homeServices.s1.title'),
      desc: t('homeServices.s1.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/88439824e169ad794a6c10a81c616a4525b5c8ec-1747x1073.png',
      link: '/services?tab=0',
      color: 'red'
    },
    {
      title: t('homeServices.s2.title'),
      desc: t('homeServices.s2.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/db1cb7c2f087af9bc6f3be24ae434802ee97910d-1821x1470.png',
      link: '/services?tab=2',
      color: 'green'
    },
    {
      title: t('homeServices.s3.title'),
      desc: t('homeServices.s3.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/29481a41167c81d694275c5674899510449aaf90-2289x1172.png',
      link: '/services?tab=4',
      color: 'red'
    }
  ];

  const floatingBadges = [
    { icon: Globe, text: t('hero.floating.dt'), color: 'rgba(139,92,246,0.7)', top: '10%', left: '-5%', delay: 0 },
    { icon: Cpu, text: t('hero.floating.ai'), color: 'rgba(239,68,68,0.7)', top: '80%', left: '-10%', delay: 1.2 },
    { icon: Wifi, text: t('hero.floating.iot'), color: 'rgba(14,165,233,0.7)', top: '15%', left: '45%', delay: 2.6 },
    { icon: Cloud, text: t('hero.floating.cloud'), color: 'rgba(34,197,94,0.7)', top: '70%', left: '35%', delay: 0.5 },
    { icon: Zap, text: t('hero.floating.auto'), color: 'rgba(245,158,11,0.7)', top: '40%', left: '10%', delay: 3.1 },
    { icon: Glasses, text: t('hero.floating.vr'), color: 'rgba(168,85,247,0.7)', top: '50%', left: '50%', delay: 1.7 },
    { icon: Binary, text: t('hero.floating.digital'), color: 'rgba(244,63,94,0.7)', top: '25%', left: '20%', delay: 4.2 },
    { icon: ScanLine, text: t('hero.floating.lidar'), color: 'rgba(6,182,212,0.7)', top: '85%', left: '15%', delay: 0.9 },
    { icon: Building2, text: t('hero.floating.bim'), color: 'rgba(16,185,129,0.7)', top: '5%', left: '25%', delay: 2.3 },
    { icon: Database, text: t('hero.floating.data'), color: 'rgba(56,189,248,0.7)', top: '60%', left: '-5%', delay: 1.6 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <div className="canvas-container">
        <Background3DWrapper />
      </div>
      <section className={styles.hero}>
        <HeroOrbitSystem />
        <div className={styles.heroBadgesContainer}>
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              className={styles.floatingBadge}
              style={{
                top: badge.top,
                left: badge.left,
                borderColor: badge.color.replace('0.7', '0.15'), // Faded border
                boxShadow: `0 0 40px ${badge.color.replace('0.7', '0.1')}`, // Ultra soft glow
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
                rotate: [-3, 3, -3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 5 + (idx % 3), // Fast and dynamic like original
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <badge.icon size={16} />
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>
        <div className={`container ${styles.heroGrid}`}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className={styles.title}>{t('hero.title1')}<br/>{t('hero.title2')}</h1>
            <p className={styles.subtitle}>
              {t('hero.subtitle')}
            </p>
            <div className={styles.buttons}>
              <Link href="/services" className="btn btn-primary">
                {t('hero.btnPrimary')}
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                {t('hero.btnSecondary')}
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
              >
                <Image 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].caption} 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.slideImage} 
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.slideOverlay}>
                  <p className={styles.slideCaption}>{slides[currentSlide].caption}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('homeServices.title')} <span className="red">{t('homeServices.highlight')}</span>
          </motion.h2>
          
          <div className={styles.servicesGrid}>
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={service.link} className={styles.serviceCard}>
                  <div className={styles.cardImgWrap}>
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.cardImg} style={{ objectFit: 'cover' }} />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                    <div className={`${styles.cardLink} ${service.color === 'red' ? styles.redLink : styles.greenLink}`}>
                      {t('homeServices.viewDetail')} <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles.viewAll}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/services" className="btn btn-secondary">
              {t('homeServices.viewAll')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

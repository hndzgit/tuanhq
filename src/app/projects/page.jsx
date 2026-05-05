"use client";

import { motion } from 'framer-motion';
import { Building, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function ProjectsPage() {
  const { t } = useLanguage();

  const bimProjects = [
    {
      title: t('projects.p1.title'),
      subTitle: t('projects.p1.sub'),
      desc: t('projects.p1.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/db1cb7c2f087af9bc6f3be24ae434802ee97910d-1821x1470.png',
      tag: t('tags.expressway'),
      color: 'red',
      tech: ['Revit', 'Civil 3D'],
      featured: true
    },
    {
      title: t('projects.p2.title'),
      subTitle: t('projects.p2.sub'),
      desc: t('projects.p2.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/b9db7e55d86baa26e9f4183ebf255a15c2665f49-1677x1039.png',
      tag: t('tags.interchange'),
      color: 'green',
      tech: ['Revit', 'Navisworks'],
      featured: false
    },
    {
      title: t('projects.p3.title'),
      subTitle: t('projects.p3.sub'),
      desc: t('projects.p3.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/0aac285403398b6187e84c4c424d3db607ef8e9e-1891x1196.png',
      tag: t('tags.scanToBim'),
      color: 'red',
      tech: ['Revit', 'LiDAR'],
      featured: false
    }
  ];

  const trainingProjects = [
    {
      title: t('projects.p4.title'),
      subTitle: t('projects.p4.sub'),
      desc: t('projects.p4.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/88439824e169ad794a6c10a81c616a4525b5c8ec-1747x1073.png',
      tag: t('tags.training'),
      color: 'red',
      tech: ['Revit', 'BIM360'],
      featured: true
    },
    {
      title: t('projects.p5.title'),
      subTitle: t('projects.p5.sub'),
      desc: t('projects.p5.desc'),
      image: 'https://cdn.sanity.io/images/wd53xh69/production/e4ddfdb3ce3a3ef7486e5cfc9f8c6816222c11c2-1758x1146.png',
      tag: t('tags.training'),
      color: 'green',
      tech: ['Revit', 'Civil 3D'],
      featured: false
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const renderCard = (project, index) => (
    <motion.div
      key={index}
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.imgWrap}>
        <span className={`${styles.tag} ${project.color === 'red' ? styles.red : styles.green}`}>
          {project.tag}
        </span>
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.img} style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.body}>
        <div className={`${styles.subTitle} ${project.color === 'red' ? styles.red : styles.green}`}>
          {project.subTitle}
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>
        <div className={styles.techList}>
          {project.tech.map(t => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className={styles.projectsPage}>
      <section className={styles.pageHero}>

        
        <div className="container">
          <motion.h1 
            className={`${styles.title} text-liquid-glass`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {t('projects.title')}
          </motion.h1>
          <motion.p 
            className={styles.desc}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('projects.desc')}
          </motion.p>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className="container">
          <motion.h2 
            className={`${styles.catTitle} ${styles.green}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Building className={styles.icon} /> {t('projects.cat1')}
          </motion.h2>
          <div className={styles.grid}>
            {bimProjects.map(renderCard)}
          </div>
        </div>
      </section>

      <section className={styles.categorySection} style={{ paddingTop: '2rem' }}>
        <div className="container">
          <motion.h2 
            className={`${styles.catTitle} ${styles.red}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <BookOpen className={styles.icon} /> {t('projects.cat2')}
          </motion.h2>
          <div className={styles.grid}>
            {trainingProjects.map(renderCard)}
          </div>
        </div>
      </section>
    </main>
  );
}

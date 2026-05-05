"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function About() {
  const [isZaloModalOpen, setIsZaloModalOpen] = useState(false);
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: -30, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <section className={styles.aboutHero}>
        <div className={`container ${styles.heroGrid}`}>
          <motion.div 
            className={styles.avatarWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.avatarRing}>
              <Image 
                src="https://cdn.sanity.io/images/wd53xh69/production/582e0deeb4e3b8957cbc3ca181a03b6e226d3faf-1280x1280.jpg" 
                alt="HOÀNG QUỐC TUẤN" 
                width={400}
                height={400}
                className={styles.avatar} 
                priority
              />
            </div>
            <div className={styles.avatarName}>HOÀNG QUỐC TUẤN</div>
            <div className={styles.avatarTitle}>{t('about.avatarTitle')}</div>
          </motion.div>

          <motion.div 
            className={styles.aboutHeroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.badge}>{t('about.heroBadge')}</motion.div>
            <motion.h1 variants={fadeInUp} className={`${styles.heroTitle} text-liquid-glass`}>{t('about.heroTitle1')} <br/>{t('about.heroTitle2')} <span className="red">BIM</span> & <span className="green">Digital Twin</span></motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              {t('about.heroDesc1')}
              <strong style={{color: 'var(--primary-green)'}}>{t('about.heroDesc2')}</strong>
              {t('about.heroDesc3')}
              <strong style={{color: 'var(--primary-red)'}}>{t('about.heroDesc4')}</strong>
              {t('about.heroDesc5')}
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>8+</div>
                <div className={styles.statLabel}>Năm kinh nghiệm</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>150+</div>
                <div className={styles.statLabel}>Dự án hoàn thành</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>500+</div>
                <div className={styles.statLabel}>Học viên đào tạo</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding glass-panel" style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', marginBottom: '4rem' }}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('about.journeyTitle1')} <span className="red">{t('about.journeyTitle2')}</span>
          </motion.h2>

          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className={styles.timeline}>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{t('about.journeyPresent')}</div>
                <div className={styles.timelineRole}>{t('about.journey1Role')}</div>
                <div className={styles.timelineCompany}>{t('about.journey1Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.journey1Desc')}</div>
              </motion.div>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={`${styles.timelineItem} ${styles.green}`}>
                <div className={styles.timelineDate}>{t('about.journey2Date')}</div>
                <div className={styles.timelineRole}>{t('about.journey2Role')}</div>
                <div className={styles.timelineCompany}>{t('about.journey2Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.journey2Desc')}</div>
              </motion.div>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{t('about.journey3Date')}</div>
                <div className={styles.timelineRole}>{t('about.journey3Role')}</div>
                <div className={styles.timelineCompany}>{t('about.journey3Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.journey3Desc')}</div>
              </motion.div>
            </div>

            <div className={styles.timeline}>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{t('about.journey4Date')}</div>
                <div className={styles.timelineRole}>{t('about.journey4Role')}</div>
                <div className={styles.timelineCompany}>{t('about.journey4Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.journey4Desc')}</div>
              </motion.div>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={`${styles.timelineItem} ${styles.green}`}>
                <div className={styles.timelineDate}>{t('about.journey5Date')}</div>
                <div className={styles.timelineRole}>{t('about.journey5Role')}</div>
                <div className={styles.timelineCompany}>{t('about.journey5Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.journey5Desc')}</div>
              </motion.div>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{t('about.journey6Date')}</div>
                <div className={styles.timelineRole}>{t('about.journey6Role')}</div>
                <div className={styles.timelineCompany}>{t('about.journey6Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.journey6Desc')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-alt">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('about.eduTitle1')} <span className="green">{t('about.eduTitle2')}</span>
          </motion.h2>

          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className={styles.timeline}>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={`${styles.timelineItem} ${styles.green}`}>
                <div className={styles.timelineDate}>{t('about.edu1Date')}</div>
                <div className={styles.timelineRole}>{t('about.edu1Role')}</div>
                <div className={styles.timelineCompany}>{t('about.edu1Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.edu1Desc')}</div>
              </motion.div>
            </div>

            <div className={styles.timeline}>
              <motion.div variants={slideInRight} className={styles.timelineItem} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}>
                <div className={styles.timelineDate}>{t('about.edu2Date')}</div>
                <div className={styles.timelineRole}>{t('about.edu2Role')}</div>
                <div className={styles.timelineCompany}>{t('about.edu2Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.edu2Desc')}</div>
              </motion.div>
            </div>

            <div className={styles.timeline}>
              <motion.div variants={slideInRight} whileHover={{ x: 10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} className={`${styles.timelineItem} ${styles.green}`}>
                <div className={styles.timelineDate}>{t('about.edu3Date')}</div>
                <div className={styles.timelineRole}>{t('about.edu3Role')}</div>
                <div className={styles.timelineCompany}>{t('about.edu3Comp')}</div>
                <div className={styles.timelineDesc}>{t('about.edu3Desc')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('about.skillsSectionTitle1')} <span className="green">{t('about.skillsSectionTitle2')}</span>
          </motion.h2>

          <motion.div 
            className={styles.skillsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { title: t('about.skill1Title'), tags: ['Autodesk Revit', 'Civil 3D', 'Navisworks', 'BIM 360', 'Dynamo', 'Infraworks'] },
              { title: t('about.skill2Title'), tags: ['C# / .NET', 'Java', 'Python', 'HTML/CSS/JS', 'Dynamo Script'] },
              { title: t('about.skill3Title'), tags: ['CTO', 'Chuyển đổi số / DX', 'PM / PMP', 'Training'] },
              { title: t('about.skill4Title'), tags: ['Highway & Bridge', 'Tunnel', 'Urban Road', 'Master Planning'] },
              { title: t('about.skill5Title'), tags: ['Digital Twin', 'Scan to BIM', 'VR / AR', 'AI Automation', 'IoT'] }
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                className={styles.skillCategory}
                variants={popIn}
                whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className={styles.skillCatTitle}>{skill.title}</div>
                <div className={styles.skillTags}>
                  {skill.tags.map(tag => (
                    <span key={tag} className={styles.skillTag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={`section-padding ${styles.contactSection}`}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>{t('about.contactTitle')}</p>
          <motion.h2 
            className="section-title"
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('about.contactTitle')}
          </motion.h2>

          <motion.div 
            className={styles.contactGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={popIn} className={styles.contactCard} whileHover={{ translateY: -3, borderColor: 'var(--primary-red)' }}>
              <span className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px', color: 'var(--primary-red)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.069-3.769-6.665-6.665l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>{t('about.contactPhone')}</div>
                <div className={styles.contactValue}>+84 399 762 377</div>
              </div>
            </motion.div>

            <motion.div variants={popIn} className={styles.contactCard} whileHover={{ translateY: -3, borderColor: 'var(--primary-green)' }}>
              <span className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', flexShrink: 0 }}>
                  <path fill="#ea4335" d="M2.03 5.37C2 5.58 2 5.79 2 6v12a2 2 0 002 2h16a2 2 0 002-2V6c0-.21 0-.42-.03-.63L12 12.72 2.03 5.37z" />
                  <path fill="#c5221f" d="M21.97 5.37A2 2 0 0020 4H4c-.73 0-1.4.39-1.75 1.02L12 12.72l9.72-7.35z" />
                  <path fill="#fbbc04" d="M22 6v14h-5V11.28l5-3.75V6z" />
                  <path fill="#4285f4" d="M2 6v14h5V11.28L2 7.53V6z" />
                  <path fill="#34a853" d="M7 20h10v-8.72l-5 3.75-5-3.75V20z" />
                </svg>
              </span>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>{t('about.contactEmail')}</div>
                <div className={styles.contactValue}>hoangquoctuan1395@gmail.com</div>
              </div>
            </motion.div>

            <motion.a 
              variants={popIn} 
              href="https://www.youtube.com/@quoctuanhoang759/videos" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
              whileHover={{ translateY: -3, borderColor: '#FF0000' }}
            >
              <svg fill="currentColor" style={{ width: '28px', height: '28px', color: '#FF0000', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>{t('about.contactYoutube')}</div>
                <div className={styles.contactValue}>{t('about.contactYoutubeVal')}</div>
              </div>
            </motion.a>

            <motion.div 
              variants={popIn} 
              className={styles.contactCard} 
              whileHover={{ translateY: -3, borderColor: '#0068ff' }}
              onClick={() => setIsZaloModalOpen(true)}
            >
              <div className={styles.zaloQrWrapper}>
                <span className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px', color: '#0068ff' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                  </svg>
                </span>
                <div className={styles.contactInfo}>
                  <div className={styles.contactLabel}>{t('about.contactZalo')}</div>
                </div>
                <Image src="/assets/ZaloQR.jpg" alt="Zalo QR" width={60} height={60} className={styles.zaloQrImg} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isZaloModalOpen && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZaloModalOpen(false)}
          >
            <motion.div 
              className={styles.modalBox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={() => setIsZaloModalOpen(false)}>×</button>
              <Image src="/assets/ZaloQR.jpg" alt="Zalo QR" width={260} height={350} className={styles.modalQrImg} />
              <h3 className={styles.modalTitle}>{t('about.modalTitle')}</h3>
              <p className={styles.modalDesc}>{t('about.modalDesc')}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

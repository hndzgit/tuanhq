"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

import TabBIMOnline from './TabBIMOnline';
import TabBIMCorp from './TabBIMCorp';
import TabBIMModel from './TabBIMModel';
import TabBIMDesign from './TabBIMDesign';
import TabDigital from './TabDigital';

function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get('tab');
  const { t } = useLanguage();
  
  const [activeTab, setActiveTab] = useState(0);

  const servicesTabs = [
    { id: 'dao-tao-online', title: t('services.tab1'), component: <TabBIMOnline /> },
    { id: 'dao-tao-doanh-nghiep', title: t('services.tab2'), component: <TabBIMCorp /> },
    { id: 'dich-vu-mo-hinh', title: t('services.tab3'), component: <TabBIMModel /> },
    { id: 'dich-vu-thiet-ke', title: t('services.tab4'), component: <TabBIMDesign /> },
    { id: 'so-hoa-quan-ly', title: t('services.tab5'), component: <TabDigital /> }
  ];

  useEffect(() => {
    if (tabParam !== null) {
      const idx = parseInt(tabParam, 10);
      if (!isNaN(idx) && idx >= 0 && idx < servicesTabs.length) {
        setActiveTab(idx);
      }
    }
  }, [tabParam, servicesTabs.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {servicesTabs.map((service, index) => (
          <button
            key={service.id}
            className={`${styles.tabBtn} ${activeTab === index ? styles.active : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className={styles.tabContent} style={{ width: '100%' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            style={{ width: '100%' }}
          >
            {servicesTabs[activeTab].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.servicesPage} style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className={styles.header} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h1 
            className={`${styles.title} text-liquid-glass`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('services.desc')}
          </motion.p>
        </div>

        <Suspense fallback={<div style={{color: 'white', textAlign: 'center'}}>Loading services...</div>}>
          <ServicesContent />
        </Suspense>
      </div>
    </main>
  );
}

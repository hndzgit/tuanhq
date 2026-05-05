"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoText}>
                <span className={styles.logoRed}>BIM</span>
                <span className={styles.logoGreen}>Innovator</span>
              </div>
            </Link>
            <p className={styles.desc}>
              {t('footer.desc')}
            </p>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.heading}>{t('footer.quickLinks')}</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/">
                  <ChevronRight size={16} /> {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <ChevronRight size={16} /> {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <ChevronRight size={16} /> {t('nav.projects')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.heading}>{t('footer.services')}</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/services?tab=0">
                  <ChevronRight size={16} /> {t('footer.s1')}
                </Link>
              </li>
              <li>
                <Link href="/services?tab=2">
                  <ChevronRight size={16} /> {t('footer.s3')}
                </Link>
              </li>
              <li>
                <Link href="/services?tab=4">
                  <ChevronRight size={16} /> {t('homeServices.s3.title')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.heading}>{t('footer.contact')}</h4>
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} />
              <div>
                <span>Email:</span>
                <a href="mailto:hoangquoctuan1395@gmail.com">hoangquoctuan1395@gmail.com</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <div>
                <span>{t('about.contactPhone')}:</span>
                <a href="tel:+84399762377">+84 399 762 377</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <MapPin className={styles.contactIcon} />
              <div>
                <span>{t('footer.address')}:</span>
                <span>{t('footer.addressVal')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

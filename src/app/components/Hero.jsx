// frontend/src/app/components/Hero.jsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './SocialIcons';
import styles from './Hero.module.css';
import { useTheme } from '../context/ThemeContext'; // Importe o hook de tema

const Hero = () => {
  const { theme } = useTheme(); // Acesse o tema atual

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className={styles.heroContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Coluna da Esquerda: Texto e Ações */}
      <div className={styles.heroText}>
        <motion.h1 variants={itemVariants}>
          Wilker Martins
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Desenvolvedor Web Full-Stack
        </motion.p>

        <motion.div variants={itemVariants} className={styles.buttonGroup}>
          <Link href="#projetos" className={styles.ctaButton}>
            <span className={styles.buttonText}>Explorar Projetos</span>
            <span className={styles.buttonIcon}>→</span>
          </Link>
          <a
            href="WilkerMartins_Curriculo.pdf" // Verifique se o nome do CV está correto
            download="WilkerMartins_Curriculo.pdf"
            className={`${styles.ctaButton} ${styles.secondaryButton}`}
          >
            Download CV
          </a>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialIcons />
        </motion.div>
      </div>

      {/* Coluna da Direita: Logo */}
      <motion.div variants={itemVariants} className={styles.heroVisual}>
        {theme === 'dark' ? (
          <Image
            src="https://res.cloudinary.com/djepel3xf/image/upload/v1751574339/1_utljtl.png"
            alt="Logo de Wilker Martins (Modo Escuro)"
            width={350}
            height={350}
            className={styles.heroLogo}
            priority
          />
        ) : (
          <Image
            src="https://res.cloudinary.com/djepel3xf/image/upload/v1751574339/6_zkjdfq.png" // SUBSTITUA PELO SEU URL/CAMINHO REAL
            alt="Logo de Wilker Martins (Modo Claro)"
            width={350}
            height={350}
            className={styles.heroLogo}
            priority
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
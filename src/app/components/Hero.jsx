// frontend/src/app/components/Hero.jsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './SocialIcons';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      className={styles.heroContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className={`${styles.gridItem} ${styles.mainText}`}>
        <h1><span className={styles.highlight}>Wilker Martins</span></h1>
        <p className={styles.subtitle}>
          Desenvolvedor Web Full-Stack
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.gridItem} ${styles.logoItem}`}>
        <Image
          src="/logo.png"
          alt="Logo principal"
          width={150}
          height={150}
          priority
        />
      </motion.div>
      
      <motion.div variants={itemVariants} className={`${styles.gridItem} ${styles.statusItem}`}>
        <div className={styles.statusIndicator}>
          <div className={styles.glowingDot}></div>
          <span>Disponível para Trabalho</span>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.gridItem} ${styles.socialsItem}`}>
        <SocialIcons />
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.gridItem} ${styles.projectsItem}`}>
        <Link href="/#projetos">
          <h3>Meus Projetos</h3>
          <p>Veja os trabalhos que desenvolvi</p>
          <span className={styles.arrow}>&rarr;</span>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.gridItem} ${styles.cvItem}`}>
        <a href="/WilkerSilva_Curriculo.pdf" download="WilkerSilva_Curriculo.pdf">
          <h3>Download CV</h3>
          <p>Acesse meu currículo completo</p>
          <span className={styles.arrow}>&darr;</span>
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.gridItem} ${styles.locationItem}`}>
        <h3>São Paulo, Brasil</h3>
      </motion.div>

    </motion.section>
  );
};

export default Hero;
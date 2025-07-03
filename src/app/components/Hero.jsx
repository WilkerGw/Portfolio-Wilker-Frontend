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
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={styles.heroContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Imagem de Fundo */}
      <Image
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2574&auto=format&fit=crop"
        alt="Fundo abstrato de tecnologia"
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
        priority
      />
      {/* Overlay Escuro */}
      <div className={styles.overlay}></div>
      
      {/* Conteúdo Centralizado */}
      <div className={styles.heroContent}>
        <motion.h1 variants={itemVariants}>
          Wilker Martins
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Desenvolvedor Web Full-Stack
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link href="#projetos" className={styles.ctaButton}>
            Explorar Projetos
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.socialsContainer}>
          <SocialIcons />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
// frontend/src/app/components/Hero.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import styles from "./Hero.module.css";

// ... (todo o resto do código do Hero.jsx permanece igual)
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      className={styles.heroContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.heroText}>
        <motion.h1 variants={itemVariants}>
          <span className={styles.highlight}>Wilker Martins</span>
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Desenvolvedor Web Full-Stack
        </motion.p>

        <motion.div variants={itemVariants} className={styles.buttonGroup}>
          <Link href="/#projetos" className={styles.ctaButton}>
            Meus Projetos
          </Link>
          <a
            href="/WilkerMartins_Curriculo.pdf"
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

      <div className={styles.heroVisual}>
        <div className={styles.glowingBlob}></div>
        <motion.div variants={logoVariants}>
          <Image
            src="/logo.png"
            alt="Logo principal"
            width={350}
            height={350}
            className={styles.heroLogo}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

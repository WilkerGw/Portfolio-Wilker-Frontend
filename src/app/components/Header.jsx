// frontend/src/app/components/Header.jsx

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const navLinks = [
  { title: "Início", href: "/#" },
  { title: "Projetos", href: "/#projetos" },
  { title: "Sobre", href: "/#sobre" },
  { title: "Contato", href: "/#contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.4 },
    }),
  };

  return (
    <>
      <header className={`${styles.headerContainer} ${hasScrolled ? styles.scrolled : ''}`}>
        {/* Container único para todos os elementos da direita */}
        <div className={styles.rightSideWrapper}>
          {/* Navegação de Desktop (será escondida em mobile via CSS) */}
          <nav className={styles.navigation}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.title}><Link href={link.href}>{link.title}</Link></li>
              ))}
            </ul>
            <ThemeToggle /> 
          </nav>

          {/* Wrapper para os botões de Mobile (será mostrado apenas em mobile via CSS) */}
          <div className={styles.mobileMenuWrapper}>
            <ThemeToggle />
            <button className={styles.menuButton} onClick={toggleMenu} aria-label="Abrir menu">
                <motion.div className={styles.menuLine} variants={{ closed: { rotate: 0, y: -6 }, open: { rotate: 45, y: 0 } }} animate={isMenuOpen ? "open" : "closed"} transition={{ duration: 0.3 }} />
                <motion.div className={styles.menuLine} variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} animate={isMenuOpen ? "open" : "closed"} transition={{ duration: 0.2 }} />
                <motion.div className={styles.menuLine} variants={{ closed: { rotate: 0, y: 6 }, open: { rotate: -45, y: 0 } }} animate={isMenuOpen ? "open" : "closed"} transition={{ duration: 0.3 }} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className={styles.mobileNavOverlay} variants={menuVariants} initial="hidden" animate="visible" exit="exit" onClick={toggleMenu}>
            <nav>
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li key={link.title} custom={index} variants={listItemVariants} initial="hidden" animate="visible">
                    <Link href={link.href} onClick={toggleMenu}>{link.title}</Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
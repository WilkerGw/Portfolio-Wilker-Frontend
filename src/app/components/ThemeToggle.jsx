// frontend/src/app/components/ThemeToggle.jsx

"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const iconVariants = {
  hidden: { y: -20, opacity: 0, rotate: -90, scale: 0.5 },
  visible: { y: 0, opacity: 1, rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  exit: { y: 20, opacity: 0, rotate: 90, scale: 0.5, transition: { duration: 0.2 } },
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.toggleButton} aria-label="Mudar tema">
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div key="moon" variants={iconVariants} initial="hidden" animate="visible" exit="exit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </motion.div>
        ) : (
          <motion.div key="sun" variants={iconVariants} initial="hidden" animate="visible" exit="exit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
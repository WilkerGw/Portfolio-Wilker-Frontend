// src/app/components/LoadingAnimation.jsx

"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingAnimation.module.css';
import { useLoading } from '../context/LoadingContext'; // Importaremos o hook do contexto

const LoadingAnimation = () => {
  const { isLoading } = useLoading();

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: "afterChildren" // Garante que as animações filhas terminem primeiro
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
        when: "beforeChildren" // Garante que a animação do overlay comece antes das filhas
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };


  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className={styles.content} variants={textVariants}>
            <div className={styles.spinner}></div>
            <h2>Carregando Projeto...</h2>
            <p>Um momento, estamos preparando os detalhes.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
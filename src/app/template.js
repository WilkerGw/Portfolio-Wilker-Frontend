// src/app/template.js

"use client";

import { motion } from 'framer-motion';

// Define as variantes da animação
const variants = {
  hidden: { opacity: 0, y: 15 }, // Começa invisível e 15px para baixo
  enter: { opacity: 1, y: 0 },   // Anima para totalmente visível e na posição original
};

export default function Template({ children }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden" // Estado inicial
      animate="enter" // Estado final
      transition={{ type: 'linear', duration: 0.5, delay: 0.2 }} // Tipo e duração da transição
    >
      {children}
    </motion.main>
  );
}
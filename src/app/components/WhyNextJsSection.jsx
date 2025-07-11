// frontend/src/app/components/WhyNextJsSection.jsx

"use client"; // Necessário para usar interatividade (useState)

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WhyNextJsSection.module.css';

// Dados das vantagens para manter o componente principal limpo
const clientAdvantages = [
  "Performance Excecional: Sites ultrarrápidos que carregam quase instantaneamente, melhorando a experiência do usuário e a retenção.",
  "SEO de Primeira Linha: As páginas são otimizadas para motores de busca como o Google, garantindo que o seu site seja encontrado mais facilmente.",
  "Segurança e Estabilidade: Construído sobre uma base moderna e robusta, oferecendo mais segurança contra vulnerabilidades comuns da web.",
  "Experiência de Usuário Fluida: Transições de página suaves e otimização automática de imagens resultam numa navegação mais agradável."
];

const devAdvantages = [
  "Renderização Híbrida: A flexibilidade de escolher entre renderização no servidor (SSR) ou estática (SSG) por página, otimizando cada parte da aplicação.",
  "Developer Experience (DX): Ferramentas como Fast Refresh e Roteamento baseado em ficheiros tornam o desenvolvimento mais rápido e produtivo.",
  "Ecossistema Robusto: Acesso a todo o vasto ecossistema do React, com milhares de bibliotecas e uma comunidade gigante e ativa.",
  "Deploy Simplificado: Integração perfeita com a Vercel, permitindo que o deploy e a escalabilidade do projeto sejam feitos com poucos cliques."
];

// Sub-componente reutilizável para cada card de vantagem
const AdvantageCard = ({ title, icon, advantages }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.advantageCard}>
      <h3 className={styles.cardTitle}>{icon} {title}</h3>
      <ul>
        <li>{advantages[0]}</li>
      </ul>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <ul>
              {advantages.slice(1).map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={toggleOpen} className={styles.showMoreButton}>
        {isOpen ? 'Ver menos' : 'Ver mais'}
        <motion.span 
            className={styles.arrowIcon}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
    </div>
  );
};


// Componente principal
const WhyNextJsSection = () => {
  return (
    <section id="why-nextjs" className={styles.whyNextContainer}>
      <h2 className={styles.sectionTitle}>Porque o Next.js?</h2>
      <p className={styles.sectionSubtitle}>
        A escolha da tecnologia certa é a base de um projeto de sucesso. Escolhi o Next.js por ser um framework que oferece o melhor dos dois mundos: uma experiência de desenvolvimento de ponta e um produto final com performance e robustez inigualáveis.
      </p>

      <div className={styles.advantagesGrid}>
        <AdvantageCard 
          title="Vantagens para o Cliente"
          icon="✅"
          advantages={clientAdvantages}
        />
        <AdvantageCard 
          title="Vantagens para o Desenvolvedor"
          icon="🚀"
          advantages={devAdvantages}
        />
      </div>
    </section>
  );
};

export default WhyNextJsSection;
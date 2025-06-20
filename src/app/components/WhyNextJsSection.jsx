// frontend/src/app/components/WhyNextJsSection.jsx

import React from 'react';
import styles from './WhyNextJsSection.module.css';

const WhyNextJsSection = () => {
  return (
    <section id="why-nextjs" className={styles.whyNextContainer}>
      <h2 className={styles.sectionTitle}>Porque o Next.js?</h2>
      <p className={styles.sectionSubtitle}>
        A escolha da tecnologia certa é a base de um projeto de sucesso. Para este portfólio e para os meus projetos, escolhi o Next.js por ser um framework React que oferece o melhor dos dois mundos: uma experiência de desenvolvimento de ponta e um produto final com performance e robustez inigualáveis.
      </p>

      <div className={styles.advantagesGrid}>
        {/* Vantagens para o Cliente */}
        <div className={styles.advantageCard}>
          <h3 className={styles.cardTitle}>✅ Vantagens para o Cliente</h3>
          <ul>
            <li>
              <strong>Performance Excecional:</strong> Sites ultrarrápidos que carregam quase instantaneamente, melhorando a experiência do usuário e a retenção.
            </li>
            <li>
              <strong>SEO de Primeira Linha:</strong> As páginas são otimizadas para motores de busca como o Google, garantindo que o seu site seja encontrado mais facilmente.
            </li>
            <li>
              <strong>Segurança e Estabilidade:</strong> Construído sobre uma base moderna e robusta, oferecendo mais segurança contra vulnerabilidades comuns da web.
            </li>
            <li>
              <strong>Experiência de Usuário Fluida:</strong> Transições de página suaves e otimização automática de imagens resultam numa navegação mais agradável.
            </li>
          </ul>
        </div>

        {/* Vantagens para o Desenvolvedor */}
        <div className={styles.advantageCard}>
          <h3 className={styles.cardTitle}>🚀 Vantagens para o Desenvolvedor</h3>
          <ul>
            <li>
              <strong>Renderização Híbrida:</strong> A flexibilidade de escolher entre renderização no servidor (SSR) ou estática (SSG) por página, otimizando cada parte da aplicação.
            </li>
            <li>
              <strong>Developer Experience (DX):</strong> Ferramentas como Fast Refresh e Roteamento baseado em ficheiros tornam o desenvolvimento mais rápido, intuitivo e produtivo.
            </li>
            <li>
              <strong>Ecossistema Robusto:</strong> Acesso a todo o vasto ecossistema do React, com milhares de bibliotecas e uma comunidade gigante e ativa.
            </li>
            <li>
              <strong>Deploy Simplificado:</strong> Integração perfeita com a Vercel, permitindo que o deploy e a escalabilidade do projeto sejam feitos com poucos cliques.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyNextJsSection;
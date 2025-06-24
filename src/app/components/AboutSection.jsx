// frontend/src/app/components/AboutSection.jsx

"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

const skills = {
  frontend: ['JavaScript (ES6+)', 'React', 'Next.js', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'API RESTful'],
  ferramentas: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
  // NOVA CATEGORIA ADICIONADA
  design: ['Gimp', 'Canva'],
};

const timelineData = [
  {
    year: '2022',
    title: 'Início da Jornada',
    description: 'Em busca de uma carreira onde os resultados dependessem diretamente do meu desempenho, fiz a transição da área de vendas para a de tecnologia, onde iniciei minha formação em Gestão da TI.',
  },
  {
    year: '2023',
    title: 'Paixão por "Criar coisas"',
    description: 'O fascínio em transformar ideias em realidade me levou a aprofundar na programação. Iniciei com HTML e CSS, e foi nesse momento que desenvolvi um interesse especial pelo desenvolvimento front-end.',
  },
  {
    year: '2024',
    title: 'Pojetos reais',
    description: 'Com a necessidade de aplicar meu conhecimentos em projetos reais, decidi assumir a reponsabilidade de criar a presença online da ótica do meu compnaheiro. Foi quando desenvolvi o site oficial da empresa com agendamento de exame de vista gratuito (Primeiros contatos com backend e banco de dados).',
  },
  {
    year: '2025',
    title: 'Aprendizado Horizontal',
    description: 'Hoje, minhas responsabilidades incluem o site oficial da loja e o desenvolvimento de um sistema ERP para gerenciamento de produtos, vendas e clientes. Cuido também da gestão das redes sociais, além da fotografia e edição das imagens dos produtos.',
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className={styles.aboutContainer}>
      <div className={styles.introSection}>
        <motion.div 
          className={styles.introText}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>Uma Paixão por Construir o Futuro da Web</h1>
          <p>
            Olá! Eu sou Wilker Martins. Para mim, programar é mais do que escrever código; é a arte de resolver problemas e criar experiências significativas. Sou movido pela curiosidade e pela satisfação de transformar uma ideia abstrata num produto digital funcional, intuitivo e com um design limpo.
          </p>
        </motion.div>
        <motion.div 
          className={styles.introImage}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/wilker.png" // Lembre-se de colocar uma foto sua na pasta /public
            alt="Uma foto profissional de Wilker Silva"
            width={300}
            height={300}
            className={styles.profilePic}
          />
        </motion.div>
      </div>

      <div className={styles.skillsSection}>
        <h2>Minhas Ferramentas</h2>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className={styles.skillCategory}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className={styles.skillsGrid}>
              {skillList.map((skill) => (
                <motion.div 
                  key={skill} 
                  className={styles.skillPill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.timelineSection}>
        <h2>Minha Jornada</h2>
        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h4 className={styles.timelineTitle}>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
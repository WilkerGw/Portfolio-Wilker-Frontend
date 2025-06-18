// frontend/src/app/sobre/page.js

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./about.module.css";

// Lista de habilidades
const skills = {
  frontend: [
    "JavaScript (ES6+)",
    "React",
    "Next.js",
    "CSS3 & HTML5",
    "CSS Modules",
  ],
  backend: ["Node.js", "Express", "MongoDB", "Mongoose", "API RESTful"],
  ferramentas: ["Git & GitHub", "VS Code", "Gemini AI", "Gimp", "Canva", "NPM"],
};

// Variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    // O template.js já anima a entrada da página, não precisamos envolver este div
    <div className={styles.aboutContainer}>
      <section className={styles.introSection}>
        <div className={styles.introText}>
          <h1>Mais que um programador, um criador de soluções.</h1>
          <p>
            Olá! Eu sou Wilker Martins, tenho 30 anos, nasci em Uberaba Mg e
            atualmente vivo em São Paulo. Sou um desenvolvedor web apaixonado
            por transformar ideias complexas em experiências digitais simples e
            intuitivas. O meu objetivo é usar a tecnologia para construir
            soluções eficientes e com um design moderno, que realmente façam a
            diferença.
          </p>
        </div>
        <div className={styles.introImage}>
          <Image
            src="/wilker.png" // Lembre-se de colocar uma foto sua na pasta /public
            alt="Uma foto profissional de Wilker Silva"
            width={300}
            height={300}
            className={styles.profilePic}
          />
        </div>
      </section>

      <motion.section
        className={styles.skillsSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Minhas Habilidades</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Frontend</h3>
            <ul>
              {skills.frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Backend</h3>
            <ul>
              {skills.backend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Ferramentas & Metodologias</h3>
            <ul>
              {skills.ferramentas.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={styles.journeySection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Minha Jornada</h2>
        <p>
          A programação me salvou! Durante anos, trabalhei como vendedor e nunca
          entendi por que era tão infeliz e nunca conseguia achar motivação para
          o que eu fazia. Desde pequeno, fui fascinado por tecnologia, até que
          decidi me aprofundar na área e descobri mais que uma paixão! É uma
          terapia! Poder criar, resolver problemas e vibrar ao conseguir
          resolvê-los é uma sensação que me preenche! Aprendi que o
          desenvolvimento web vai além do código e pude sair da minha bolha para
          aprender além do VS Code. Hoje, posso unir o melhor da experiência que
          obtive utilizando sistemas web com a bagagem que conquistei durante
          três anos de estudo na área.
        </p>
        <div className={styles.ctaContainer}>
          <Link href="/#projetos" className={styles.ctaButton}>
            Veja meu trabalho
          </Link>

          {/* NOVO BOTÃO DE DOWNLOAD DO CURRÍCULO */}
          <a
            href="/WilkerMartins_Curriculo.pdf"
            download="WilkerMartins_Curriculo.pdf"
            className={`${styles.ctaButton} ${styles.secondaryButton}`}
          >
            Download CV
          </a>
        </div>
      </motion.section>
    </div>
  );
}

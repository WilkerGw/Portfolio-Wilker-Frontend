// frontend/src/app/page.js

import React from 'react';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import WhyNextJsSection from "./components/WhyNextJsSection";
import AboutPage from "./sobre/page";
import ContactPage from "./contato/page";
import Footer from "./components/Footer";
import styles from "./page.module.css";

async function getProjects() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;
    
    // AQUI ESTÁ A MUDANÇA MÁGICA:
    // Em vez de 'no-store', dizemos ao Next.js para revalidar os dados a cada 3600 segundos (1 hora).
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`Falha ao buscar os projetos: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Erro em getProjects:", error);
    return []; 
  }
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className={styles.page}>
      <main>
        <Hero/>
        <ProjectsSection projects={projects} />
        <WhyNextJsSection />
        <AboutPage/>
        <ContactPage/>
      </main>
      <Footer/>
    </div>
  );
}
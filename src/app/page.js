// frontend/src/app/page.js

import React from 'react';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import WhyNextJsSection from "./components/WhyNextJsSection";
import AboutPage from "./sobre/page";
import ContactPage from "./contato/page";
import Footer from "./components/Footer";
import styles from "./page.module.css";

// Função para buscar os projetos no lado do servidor
async function getProjects() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;
    // Usamos 'no-store' para garantir que os dados são sempre frescos no servidor durante o teste.
    // Para produção final, poderíamos usar { next: { revalidate: 3600 } } para cache de 1 hora.
    const res = await fetch(apiUrl, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Falha ao buscar os projetos: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Erro em getProjects:", error);
    // Retorna um array vazio em caso de erro para não quebrar a página.
    return []; 
  }
}

// A página Home agora é um Server Component assíncrono
export default async function Home() {
  // Os dados são buscados no servidor ANTES da página ser enviada ao navegador
  const projects = await getProjects();

  return (
    <div className={styles.page}>
      <main>
        <Hero/>
        {/* Passamos os projetos como uma prop para o componente */}
        <ProjectsSection projects={projects} />
        <WhyNextJsSection />
        <AboutPage/>
        <ContactPage/>
      </main>
      <Footer/>
    </div>
  );
}
// frontend/src/app/page.js

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import WhyNextJsSection from "./components/WhyNextJsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection"; // 1. Importa o componente renomeado
import styles from "./page.module.css";

async function getProjects() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    if (!res.ok) { throw new Error(`Falha ao buscar os projetos: ${res.statusText}`); }
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
        <AboutSection/>
        <ContactSection/> {/* 2. Usa o componente renomeado */}
      </main>
      <Footer/>
    </div>
  );
}
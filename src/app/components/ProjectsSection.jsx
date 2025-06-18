// frontend/src/app/components/ProjectsSection.jsx

"use client";

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // MUDANÇA AQUI: Usando a variável de ambiente
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar os dados dos projetos');
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <p className={styles.loadingText}>A carregar projetos...</p>;
    }
    
    if (error) {
      return <p className={styles.errorText}>Erro: {error}</p>;
    }

    if (projects.length === 0) {
      return <p>Nenhum projeto encontrado.</p>;
    }

    return (
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    );
  };

  return (
    <section id="projetos" className={styles.projectsSection}>
      <h2>Meus Projetos</h2>
      {renderContent()}
    </section>
  );
};

export default ProjectsSection;
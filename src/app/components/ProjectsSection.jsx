// frontend/src/app/components/ProjectsSection.jsx

// Removemos o "use client" e os hooks useState e useEffect. Agora é um Server Component.
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

// O componente agora recebe 'projects' como uma prop
const ProjectsSection = ({ projects }) => {
  // A lógica de carregamento e erro agora é tratada na página pai (page.js)
  const renderContent = () => {
    // Verifica se a prop 'projects' não é undefined e se tem conteúdo
    if (!projects || projects.length === 0) {
      // Esta mensagem só aparecerá se a API falhar ou não retornar projetos.
      return <p>Nenhum projeto encontrado ou falha ao carregar.</p>;
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
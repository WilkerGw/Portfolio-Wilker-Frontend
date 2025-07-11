
import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = ({ projects }) => {
  const renderContent = () => {
    if (!projects || projects.length === 0) {
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

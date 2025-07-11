// frontend/src/app/projetos/[id]/page.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './project-detail.module.css';
import { notFound } from 'next/navigation';
import ProjectDetailClient from '@/app/components/ProjectDetailClient'; // 1. Importe o componente cliente

async function getProjectData(id) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`;
  const res = await fetch(apiUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectData(params.id);

  return (
    // 2. Envolva o conteúdo principal com o ProjectDetailClient
    <ProjectDetailClient>
      <main className={styles.detailContainer}>
        <Link href="/#projetos" className={styles.backLink}>&larr; Voltar para todos os projetos</Link>
        
        <h1 className={styles.title}>{project.title}</h1>
        
        <div className={styles.imageContainer}>
          <Image 
            src={project.imageUrl}
            alt={`Imagem da versão desktop do projeto ${project.title}`}
            width={900}
            height={500}
            className={styles.projectImageDesktop}
            priority
          />
          {project.mobileImageUrl && (
            <div className={styles.mobileImageWrapper}>
              <Image
                src={project.mobileImageUrl}
                alt={`Imagem da versão mobile do projeto ${project.title}`}
                width={200}
                height={400}
                className={styles.projectImageMobile}
              />
            </div>
          )}
        </div>

        <div className={styles.content}>
          <h2>Sobre o Projeto</h2>
          <p>{project.description}</p>
          <h2>Tecnologias Utilizadas</h2>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.projectLinks}>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Ver Projeto Online 🚀
            </Link>
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Ver Repositório 🔗
            </Link>
          </div>
        </div>
      </main>
    </ProjectDetailClient>
  );
}
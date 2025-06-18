// frontend/src/app/components/ProjectCard.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const { _id, title, description, imageUrl, mobileImageUrl, tags, liveUrl, repoUrl } = project;

  const projectId = _id; 

  return (
    <div className={styles.card}>
      <Link href={`/projetos/${projectId}`} className={styles.mainLink}>
        <div className={styles.imageContainer}>
          {/* Imagem Desktop */}
          <Image
            src={imageUrl}
            alt={`Thumbnail do projeto ${title}`}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Imagem Mobile Sobreposta */}
          {mobileImageUrl && (
            <div className={styles.cardMobileImageWrapper}>
              <Image
                src={mobileImageUrl}
                alt={`Thumbnail mobile do projeto ${title}`}
                fill
                className={styles.cardImageMobile}
              />
            </div>
          )}
        </div>
      </Link>
      <div className={styles.cardContent}>
        <Link href={`/projetos/${projectId}`} className={styles.mainLink}>
          <h3>{title}</h3>
        </Link>
        <p>{description.substring(0, 100)}...</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Ver ao Vivo 🚀
          </Link>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Repositório 🔗
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
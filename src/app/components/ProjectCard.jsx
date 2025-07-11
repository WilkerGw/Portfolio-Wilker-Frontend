// frontend/src/app/components/ProjectCard.jsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { useLoading } from "../context/LoadingContext"; // 1. Importe o hook

const ProjectCard = ({ project }) => {
  const { _id, title, imageUrl, tags } = project;
  const projectId = _id;
  const { setIsLoading } = useLoading(); // 2. Obtenha a função para definir o estado

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // 3. Função para lidar com o clique
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    // 4. Adicione o evento onClick
    <Link href={`/projetos/${projectId}`} className={styles.card} onClick={handleClick}>
      <motion.div
        className={styles.cardContent}
        initial="hidden"
        whileHover="visible"
      >
        <Image
          src={imageUrl}
          alt={`Thumbnail do projeto ${title}`}
          fill
          className={styles.cardImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className={styles.titleContainer}>
          <h3>{title}</h3>
        </div>

        <motion.div className={styles.cardOverlay} variants={overlayVariants}>
          <motion.div className={styles.tags} variants={itemVariants}>
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div className={styles.cardLinks} variants={itemVariants}>
            <p>Ver detalhes &rarr;</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
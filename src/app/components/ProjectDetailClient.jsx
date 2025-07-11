// src/app/components/ProjectDetailClient.jsx

"use client";

import { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';

const ProjectDetailClient = ({ children }) => {
  const { setIsLoading } = useLoading();

  // Desativa o carregamento assim que o componente é montado
  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return <>{children}</>;
};

export default ProjectDetailClient;
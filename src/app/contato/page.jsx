// frontend/src/app/contato/page.js

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './contact.module.css';

export default function ContactPage() {
  // Estado para gerir os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para gerir o status do envio
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xwpbbzlr', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setStatus('error');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Vamos Conversar</h1>
        <p>
          Tem um projeto em mente ou apenas quer dizer olá? Preencha o formulário abaixo e entrarei em contato o mais breve possível.
        </p>
      </motion.div>

      <motion.form 
        onSubmit={handleSubmit} 
        className={styles.contactForm}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton} disabled={status === 'sending'}>
          {status === 'sending' ? 'A Enviar...' : 'Enviar Mensagem'}
        </button>

        {/* Mensagens de feedback para o usuário */}
        {status === 'success' && (
          <p className={styles.successMessage}>
            Mensagem enviada com sucesso! Obrigado pelo contato.
          </p>
        )}
        {status === 'error' && (
          <p className={styles.errorMessage}>
            Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
          </p>
        )}
      </motion.form>
    </div>
  );
}
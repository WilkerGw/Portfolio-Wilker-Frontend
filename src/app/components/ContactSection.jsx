// frontend/src/app/components/ContactSection.jsx

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons'; // Reutilizaremos nosso componente de ícones
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xxxxxxxx', { // SUBSTITUA PELO SEU URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className={styles.contactContainer}>
      {/* Coluna da Esquerda */}
      <motion.div 
        className={styles.formColumn}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Vamos construir algo incrível.</h2>
        <p>Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente, uma pergunta, ou simplesmente quer dizer olá, sinta-se à vontade para me enviar uma mensagem.</p>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton} disabled={status === 'sending'}>
            {status === 'sending' ? 'A Enviar...' : 'Enviar Mensagem'}
          </button>
          {status === 'success' && <p className={styles.successMessage}>Mensagem enviada com sucesso!</p>}
          {status === 'error' && <p className={styles.errorMessage}>Ocorreu um erro. Tente novamente.</p>}
        </form>
      </motion.div>

      {/* Coluna da Direita */}
      <motion.div 
        className={styles.directColumn}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.directContactCard}>
            <h3>Contato Direto</h3>
            <p>Prefere outros métodos? Sem problemas. Aqui estão outras formas de me encontrar.</p>
            <a href="mailto:seu-email@exemplo.com" className={styles.directLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>wil.dev@hotmail.com</span>
            </a>
            <div className={styles.separator}>
                <h3>Encontre-me Online</h3>
            </div>
            <SocialIcons />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
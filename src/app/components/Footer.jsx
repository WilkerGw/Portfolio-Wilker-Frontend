// frontend/src/app/components/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id='footer' className={styles.footerContainer}>
      <p>&copy; {new Date().getFullYear()} - Wilker Martins. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
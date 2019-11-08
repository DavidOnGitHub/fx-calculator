import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <a href="/" className={styles['site-name']}>
      FX Calculator
    </a>
  </header>
);

export default Header;

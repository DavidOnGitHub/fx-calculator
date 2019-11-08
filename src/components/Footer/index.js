import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles['copyright']}>
      {`Copyright \u00A9 2019 FX Calculator. All Rights Reserved.`}
    </div>
  </footer>
);

export default Footer;

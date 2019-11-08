import React from 'react';
import CurrencyConverter from '../../components/CurrencyConverter';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Convert currency</p>
      <CurrencyConverter />
    </div>
  );
};

export default Home;

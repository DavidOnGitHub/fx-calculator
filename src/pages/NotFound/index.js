import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = props => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputField.module.scss';

const InputField = ({ label, children, className }) => (
  <div className={`${styles.container} ${className}`}>
    <p className={styles.label}>{label}</p>
    <div className={styles.field}>{children}</div>
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};

InputField.defaultProps = {
  className: ''
};

export default InputField;

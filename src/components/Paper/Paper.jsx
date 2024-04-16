import React from 'react';
import styles from './Paper.module.css';

const Paper = ({ children }) => {
  return <div className={styles.paperWrapper}>{children}</div>;
};

export default Paper;

import React from 'react';
import styles from './styles.module.css';
export interface LoaderInterface {}

const Loader: React.FC<LoaderInterface> = () => {
  return <div className={styles.loader}>Loading...</div>;
};

export default Loader;

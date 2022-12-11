import React from 'react';
import styles from './styles.module.css';
export interface CustomDivInterface {
  element: number;
}

const CustomDiv: React.FC<CustomDivInterface> = ({ element }) => (
  <div className={`${styles.customDiv}`}>This is the element # {element}</div>
);

export default CustomDiv;

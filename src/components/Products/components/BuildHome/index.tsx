import React from 'react';
import styles from './index.module.scss';
import OneStopSol from '../onestepsol';
import BuilderProcess from '../BuilderProcess';
import TestimonalBuilder from '../TestimonalHouse';

const BuildHome = () => {
  return (
    <div className={styles.main_cont}>
      <OneStopSol />
      <BuilderProcess />
      <TestimonalBuilder />
    </div>
  );
};
export default BuildHome;

import React from 'react';
import styles from './index.module.scss';
import OneStopSol from '../onestepsol';
import BuilderProcess from '../BuilderProcess';
import TestimonalBuilder from '../TestimonalHouse';
import FreeConsultation from '../FreeConsultation';
import CostEstimator from '../CostEstimator';

const BuildHome = () => {
  return (
    <div className={styles.main_cont}>
      <FreeConsultation />
      <OneStopSol />
      <CostEstimator />

      <BuilderProcess />
      <TestimonalBuilder />
      
    </div>
  );
};
export default BuildHome;

import React from 'react';
import styles from './index.module.scss';
import OneStopSol from '../onestepsol';
import BuilderProcess from '../BuilderProcess';

const BuildHome = () => {
  return (
    <div className={styles.main_cont}>
      <OneStopSol />
      <BuilderProcess />
    </div>
  );
};
export default BuildHome;

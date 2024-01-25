import React from 'react';
import styles from './index.module.scss';
import LatestProps from '@/components/LatestProps';
import AllProperty from '../allProperty';

const PropertiesHero = () => {
  return (
    <div className={styles.main_cont}>
      <h2 className={styles.heading}>Properties for Sale</h2>
      <p className={styles.tagline}>Find properties in your favourite city</p>
      <div className={styles.prop_cont}>
        <div className={styles.prop_list}>
          <AllProperty />
        </div>
        <div className={styles.latest}><LatestProps/></div>
      </div>
    </div>
  );
};

export default PropertiesHero;

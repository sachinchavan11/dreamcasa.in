import React from 'react';
import styles from './index.module.scss';
import GradeIcon from '@mui/icons-material/Grade';

const BuilderReview = () => {
  return (
    <div className={styles.main_cont}>
      <div>
        <GradeIcon />
        <GradeIcon />
        <GradeIcon />
        <GradeIcon />
        <GradeIcon />
      </div>
      <p className={styles.desc}>
        The attention to detail displayed by their team were truly commendable.
        Every corner of my home speaks volumes about the dedication and
        expertise invested in its construction. The materials used were of the
        highest quality, ensuring durability and a stunning finish
      </p>
      <div className={styles.title}>Sandeep Kumar</div>
    </div>
  );
};

export default BuilderReview;

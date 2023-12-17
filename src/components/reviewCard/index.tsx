import React from 'react';
import styles from './index.module.scss';

const ReviewCardslider = (props: any) => {
  const { desc,author } = props;
  return (
    <div className={styles.review_card}>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.customer}>-{author}</p>
    </div>
  );
};

export default ReviewCardslider;

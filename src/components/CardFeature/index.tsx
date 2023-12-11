import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { Button } from '@mui/material';

const CardFeature = (props: any) => {
  const { title, description, label } = props;
  return (
    <div className={styles.card_container}>
      <div className={styles.img_cont}>
        <Image
          src="/images/buy_home.webp"
          alt="buy_a_home"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.text_cont}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <Button variant="outlined" color="secondary" sx={{ fontWeight: 700 }}>
          {label}
        </Button>
      </div>
    </div>
  );
};

export default CardFeature;

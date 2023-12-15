import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { Button } from '@mui/material';

const CardFeature = (props: any) => {
  const { title, description, label, image } = props;
  return (
    <div className={styles.card_container}>
      <div className={styles.img_wrap}>
        <div className={styles.img_cont}>
          <Image src={image} alt="buy_a_home" layout="fill" objectFit="cover" />
        </div>
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

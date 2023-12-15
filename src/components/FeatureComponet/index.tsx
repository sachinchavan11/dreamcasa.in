import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import CardFeature from '../CardFeature';

const cardlist = [
  {
    title: 'Buy a home',
    description:
      'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    label: 'Browse More',
    image: '/images/buyhome.jpg',
  },
  {
    title: 'Buy a Flat ',
    description:
      'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    label: 'Visit Site',
    image: '/images/buyflat.jpg',
  },
  {
    title: 'Sell a Home',
    description:
      'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    label: 'Visit Site',
    image: '/images/sellhome.jpg',
  },
];

const FeatureComponent = () => {
  return (
    <div className={styles.feature_cont}>
      {cardlist.map((item: any, index: any) => {
        return (
          <div key={index} className={styles.card_main_container}>
            <CardFeature
              title={item.title}
              description={item.description}
              label={item.label}
              image={item.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeatureComponent;

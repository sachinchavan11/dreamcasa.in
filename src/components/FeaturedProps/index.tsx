import React from 'react';
import styles from './index.module.scss';
import PropsCard from '../PropsCard';

const Dataprops = [
  {
    name: 'VASAVI',
    location: 'Nampally',
    pricing: 'Starting from 60L-2Cr ',
    extra: 'Apartment | 2BHK | 3HK | 4BHK',
  },
  {
    name: 'PRESTIAGE ',
    location: 'Madhapur',
    pricing: 'Starting from 40L-1.5Cr ',
    extra: 'Apartment | 2BHK | 3HK | 4BHK',
  },
  {
    name: 'MYHOME',
    location: 'NankramGuda',
    pricing: 'Starting from 70L-2.5Cr',
    extra: 'Apartment | 2BHK | 3HK | 4BHK',
  },
];
const FeaturedProps = () => {
  return (
    <div className={styles.main_container}>
      <h2 className={styles.title}>
        {' '}
        FEATURED <span className={styles.highlight}>PROPERTIES</span>
      </h2>
      <p className={styles.tagline}>
        Your Gateway to Exclusive Real Estate Opportunities – Building Dreams
        with Channel Partnerships
      </p>
      <div className={styles.props_card_cont}>
        {Dataprops.map((item: any, index: any) => {
          return (
            <div key={index}>
              <PropsCard
                index={index + 1}
                name={item.name}
                pricing={item.pricing}
                location={item.location}
                extra={item.extra}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProps;

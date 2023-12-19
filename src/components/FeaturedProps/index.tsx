import React from 'react';
import styles from './index.module.scss';
import PropsCard from '../PropsCard';

const Dataprops = [
  {
    name: 'VASAVI',
    location: 'Nampally',
  },
  {
    name: 'PRESTIAGE ',
    location: 'Madhapur',
  },
  {
    name: 'MYHOME',
    location: 'Nankram Guda',
  },
];
const FeaturedProps = () => {
  return (
    <div className={styles.main_container}>
      <h2 className={styles.title}> FEATURED PROPERTIES</h2>
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
                location={item.location}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProps;

import React from 'react';
import styles from './index.module.scss';
import LatestPropCard from '../Latestpropcard';

const propdata = [
  {
    title: 'Imark Developers',
    price: 'starting from 70 lakhs',
    Area: 'ShankarPally',
    image: '/images/latestprops/suchirindia.png',
  },
  {
    title: 'SuchirIndia TimberLeaf',
    price: 'starting from 50 lakhs',
    Area: 'Shamshabad',
    image: '/images/latestprops/suchirindia.png',
  },
  {
    title: 'Raadhe ',
    price: 'starting from 80 lakhs',
    Area: 'Tellapur',
    image: '/images/latestprops/raadhe.png',
  },
];
const LatestProps = () => {
  return (
    <div className={styles.main_cont}>
      <p className={styles.latest}>Latest Properties</p>
      <div className={styles.prop_cont}>
        {propdata.map((item: any) => {
          return (
            <>
              <LatestPropCard
                name={item.title}
                price={item.price}
                area={item.Area}
                image={item.image}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default LatestProps;

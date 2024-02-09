import React from 'react';
import styles from './index.module.scss';
import Image from 'next/legacy/image';

const OneStopSol = () => {
  const data = [
    {
      image: '/images/custombuilder/features/hidden-charges.png',
      title: 'TIMELY DELIVERY',
      desc: '   In this unorgainsed market, we offer professional in-house home building services for clients with varying budgets, from affordable to high-end.',
    },
    {
      image: '/images/custombuilder/features/time-delivery.png',
      title: 'NO HIDDEN CHARGES',
      desc: 'One lump sum cost till the completion and handover of the project.',
    },
    {
      image: '/images/custombuilder/features/gurantee-document.png',
      title: 'CONSTRUCTION GUARANTEE',
      desc: '1 year construction guarantee and 10 year waterproofing warranty',
    },
    {
      image: '/images/custombuilder/features/contract-deal.png',
      title: 'NO SUBCONTRACTING',
      desc: 'Architecture, Structural, Construction, Electrical, Plumbing, Interiors - Complete in-house team with no subcontracting',
    },
  ];
  return (
    <div className={styles.main_cont}>
      <div className={styles.feature_cont}>
        <div className={styles.sol_cont}>
          <p className={styles.sol_cont_title}>
            all in one <span className={styles.highlight}>solution</span>
          </p>
          <p className={styles.sol_cont_desc}>
            In this unorgainsed market, we offer professional in-house home
            building services for clients with varying budgets, from affordable
            to high-end.
          </p>
        </div>
        <div className={styles.feature_item}>
          {data.map((item: any, index: any) => {
            return (
              <div key={index} className={styles.item_cont}>
                <div className={styles.image_wrap}>
                  <div className={styles.img_cont}>
                    <Image src={item.image} alt="" layout="fill" />
                  </div>
                </div>
                <div>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OneStopSol;

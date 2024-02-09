import React from 'react';
import styles from './index.module.scss';
import Image from 'next/legacy/image';

const BuilderProcess = () => {
  const buildsteps = [
    {
      image: '/images/custombuilder/features/contract-deal.png',
      title: 'Submit Requirement',
      desc: 'Technical team will reach out to you',
    },
    {
      image: '/images/custombuilder/features/contract-deal.png',
      title: 'Cost Estimation',
      desc: 'Our expert will give cost estimation',
    },
    {
      image: '/images/custombuilder/features/contract-deal.png',
      title: 'Schedule Visit',
      desc: 'Expert will reach out to Location and note measurement',
    },
    {
      image: '/images/custombuilder/features/contract-deal.png',
      title: 'Agreement and signing ',
      desc: 'Agreement signing between clients & buildAhome',
    },
    {
      image: '/images/custombuilder/features/contract-deal.png',
      title: 'work Execution and Delivery ',
      desc: 'Team will start work and finish within time',
    },
  ];
  return (
    <div className={styles.main_cont}>
      <h2 className={styles.title}>HOW IT WORKS</h2>
      <div className={styles.underline}></div>
      <div className={styles.card_wrap}>
        {buildsteps.map((item: any, index: any) => {
          return (
            <div className={styles.card_cont} key={index}>
              <div className={styles.title_img_cont}>
                <div className={styles.img_cont}>
                  <Image src={item.image} alt="steps_img" layout="fill" />
                </div>
                <p className={styles.step_cont}>{index + 1}</p>
              </div>
              <p className={styles.sub_title}>{item.title}</p>
              <p className={styles.desc_cont}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuilderProcess;

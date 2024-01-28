import React from 'react';
import styles from './index.module.scss';
import Image from 'next/legacy/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const data = [
  {
    label: 'Contact Expert',
    image: '/images/workflow/agent.png',
  },

  {
    label: 'Choose a Property',
    image: '/images/workflow/select.png',
  },
  {
    label: 'Plan a Site Visit',
    image: '/images/workflow/sitevisit.png',
  },
  {
    label: 'Loan Assistance',
    image: '/images/workflow/loan.png',
  },
  {
    label: 'Get  Dream home',
    image: '/images/workflow/meet.png',
  },
];

const WorkFlow = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.heading}>
        <div>
          <span className={styles.normal_cont}> Follow </span>{' '}
          <span className={styles.highlight}>The Roadmap</span>
        </div>
      </div>
      <p className={styles.tagline}>
        Where Trust is Built, and Complexity Simplified for better living
      </p>

      <div className={styles.workflow_cont}>
        <div className={styles.flow_item}>
          {data.map((item: any, index: any) => {
            const isLastItem = index === data.length - 1;
            return (
              <div key={index} className={styles.item_wrap}>
                <div className={styles.item_cont}>
                  <div className={styles.image_wrap}>
                    <div className={styles.image_cont}>
                      <Image
                        src={item.image}
                        alt="expert"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <p className={styles.step}>{item.label}</p>
                </div>
                {!isLastItem && (
                  <div className={styles.arrow}>
                    <ArrowForwardIcon sx={{ height: '80px', width: '70px' }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

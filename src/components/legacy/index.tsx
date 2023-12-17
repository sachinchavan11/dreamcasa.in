import React from 'react';
import styles from './index.module.scss'; // Make sure to use the correct file path
import Images from 'next/image';

const Legacy = () => {
  const data = [
    { icon: '/images/yearsex.svg', value: 5, label: 'Years of Trust' },
    { icon: '/images/projects.jpg', value: 2, label: 'Commercial Projects' },
    {
      icon: '/images/happy_customer.jpg',
      value: 100,
      label: 'Happy Customers',
    },
    { icon: '/images/trust.jpg', value: 5, label: 'Years of Client success' },
  ];

  return (
    <div className={styles.main_cont}>
      <div className={styles.title_cont}>
        <p>
          <span className={styles.normal_cont}> SUCCESS</span>{' '}
          <span className={styles.highlight}>OVER  THE  YEARS</span>
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.legacy_cont}>
        {data.map((item, index) => (
          <div className={styles.items_cont} key={index}>
            <div className={styles.img_icon}>
              <Images
                src={item.icon}
                alt={`item-${index}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.text_cont}>
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legacy;

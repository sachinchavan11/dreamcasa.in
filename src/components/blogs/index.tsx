import React from 'react';
import styles from './index.module.scss';
import BlogCard from '../BlogCard';

const data = [
  {
    title: 'Building a Business',
    month: 'December',
    desc: 'Building a business is an exciting but challenging journey that involves careful planning, execution, and adaptation.',
  },
  {
    title: 'Investing In RealEsate',
    month: 'October',
    desc: 'Investing in real estate involves purchasing, owning, managing, renting, or selling properties for profit... ',
  },
  {
    title: 'How to Become Rich',
    month: 'November',
    desc: 'Becoming wealthy through real estate investing requires strategic planning, financial discipline, and a good understanding of the real estate market',
  },
  {
    title: 'Lands Rate In India',
    month: 'December',
    desc: 'Land rates vary significantly based on the location within Hyderabad. Prime and well-developed areas generally command higher prices than emerging or suburban areas.',
  },
];

const BlogsComponent = () => {
  return (
    <div className={styles.main_container}>
      <h2 className={styles.title}>ARTICLES AND NEWS:</h2>
      <p className={styles.desc}>
        Explore our curated collection of insightful articles and latest news,
        delving into the realms of investment strategies and the dynamic
        landscape of real estate.
      </p>
      <div className={styles.card_cont}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <BlogCard
                title={item.title}
                month={item.month}
                index={index + 1}
                desc={item.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsComponent;

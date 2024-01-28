import React from 'react';
import styles from './index.module.scss';
import Image from 'next/legacy/image';

const BlogsComponentCard = (props: any) => {
  const { title, desc, index } = props;
  return (
    <div className={styles.main_cont}>
      <div className={styles.img_cont}>
        <Image
          src={`/blogs/blog${index + 1}.jpg`}
          alt="blog_card"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className={styles.heading}>{title}</p>
      <p className={styles.desc_cont}>
        Who doesn’t love a touch of luxury in homes? Today potential homebuyers
        look for homes that offer something beyond the basic needs. The world of
        luxury living is growing and expanding ever...
      </p>
    </div>
  );
};

export default BlogsComponentCard;

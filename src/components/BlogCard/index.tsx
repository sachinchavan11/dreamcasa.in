import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const BlogCard = (props: any) => {
  const { title, month, index, desc } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDesc = isExpanded
    ? desc
    : `${desc.split(' ').slice(0, 13).join(' ')}...`;

  return (
    <div className={styles.main_container}>
      <div className={styles.img_cont}>
        <Image
          src={`/images/blogs/blog${index}.jpg`}
          alt="blog_img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.month_cont}>
        <p>Article</p>
        <p>{month}</p>
      </div>
      <p className={styles.blog_title}>{title}</p>
      <p className={styles.desc}>
        {truncatedDesc}{' '}
        {!isExpanded && (
          <span className={styles.see_more} onClick={() => setIsExpanded(true)}>
            See More &#8594;
          </span>
        )}
      </p>
    </div>
  );
};

export default BlogCard;

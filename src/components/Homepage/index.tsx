import React from 'react';
import ContentBar from '../Contentbar';
import styles from './index.module.scss';
import FeatureComponent from '../FeatureComponet';
import Legacy from '../legacy';
import WorkFlow from '../WorkFlow';
import CustomerReviews from '../review';
import FeaturedProps from '../FeaturedProps';
import BlogsComponent from '../blogs';

const Homepage = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.sub_cont}>
        <ContentBar />
      </div>
      <FeaturedProps />
      <FeatureComponent />
      <WorkFlow />
      <CustomerReviews />
      <Legacy />
      <BlogsComponent />
    </div>
  );
};

export default Homepage;

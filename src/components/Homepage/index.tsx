import React from 'react';
import ContentBar from '../Contentbar';
import styles from './index.module.scss';
import FeatureComponent from '../FeatureComponet';
import Legacy from '../legacy';
import WorkFlow from '../WorkFlow';

const Homepage = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.sub_cont}>
        <ContentBar />
      </div>
      <FeatureComponent />
      <WorkFlow />
      <Legacy />
    </div>
  );
};

export default Homepage;

import React from 'react';
import Navbar from '../navbar';
import Footer from '../Footer';
import ContentBar from '../Contentbar';
import styles from './index.module.scss';
import FeatureComponent from '../FeatureComponet';
import Legacy from '../legacy';
import WorkFlow from '../WorkFlow';

const Homepage = () => {
  return (
    <div className={styles.main_container}>
      <Navbar />
      <div className={styles.sub_cont}>
        <ContentBar />
      </div>
      <FeatureComponent />
      <WorkFlow />
      <Legacy />
      <Footer />
    </div>
  );
};

export default Homepage;

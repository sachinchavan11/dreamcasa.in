import React from 'react';
import styles from './index.module.scss';

const OneStopSol = () => {
  return (
    <div className={styles.main_cont}>
      <div className={styles.feature_cont}>
        <div>
          <p className={styles.sol_cont}>all-in-one solution</p>
          <p>
            In this unorgainsed market, we offer professional in-house home
            building services for clients with varying budgets, from affordable
            to high-end.
          </p>
        </div>
        <div>
          <p>TIMELY DELIVERY</p>
          <p>
            Our Projects will be handed over on time as per the given schedule.
            If there is any delay in handover, we pay a penalty for every day we
            delay.
          </p>
        </div>
        <div>
          <p>NO HIDDEN CHARGES</p>
          <p>
            One lump sum cost till the completion and handover of the project.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OneStopSol;

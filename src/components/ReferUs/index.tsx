import React from 'react';
import styles from './index.module.scss';

const ReferUsComp = () => {
  return (
    <div className={styles.main_cont}>
      <h2 className={styles.title}>REFER US</h2>
      <p className={styles.sub_title}>
        Refer Us and Unlock Exciting Rewards by Securing Your Share of Benefits.{' '}
      </p>
      <div className={styles.form_cont}>
        {/* referal giving details */}
        <div className={styles.referal_cont}>
          <h2>REFERRER DETAILS</h2>
          <form>
            <div>
              <label htmlFor="FirstName">First Name:</label>
              <input type="text" id="" name="FirstName" />
            </div>
            <div>
              <label htmlFor="LastName">Last Name:</label>
              <input type="text" id="LastName" name="LastName" />
            </div>
            <div>
              <label htmlFor="PNumber"> Phone Number:</label>
              <input type="text" id="PNumber" name="PNumber" />
            </div>

            <div>
              <label htmlFor="Email"> Email Address:</label>
              <input type="email" id="Email" name="Email" />
            </div>
            <div>
              <div className={styles.btn_cont}>
                <button type="submit">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
        {/* referal taking details */}
        <div className={styles.referree_details}>
          <h2>REFEREE DETAILS</h2>
          <form>
            <div>
              <label htmlFor="RFirstName">Referre First Name:</label>
              <input type="text" id="RFirstName" name="RFirstName" />
            </div>
            <div>
              <label htmlFor="RLastName">Referre Last Name:</label>
              <input type="text" id="RLastName" name="RLastName" />
            </div>
            <div>
              <label htmlFor="RPNumber">Referre Phone Number:</label>
              <input type="text" id="RPNumber" name="RPNumber" />
            </div>
            <div>
              <label htmlFor="receiverEmail">Referre Email Address:</label>
              <input type="email" id="receiverEmail" name="receiverEmail" />
            </div>
            <div className={styles.btn_cont}>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferUsComp;

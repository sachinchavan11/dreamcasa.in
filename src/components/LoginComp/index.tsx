import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/legacy/image';
import { Button } from '@mui/material';

const LoginComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className={styles.main_cont}>
      <div className={styles.img_cont}>
        <div className={styles.title_cont}>
          <p className={styles.title}>DREAMCASA</p>
          <p className={styles.subtitle}>right path to Dream key</p>
        </div>
        <div className={styles.welcome_cont}>
          <p>WELCOME</p>
          <p>BACK!</p>
        </div>
      </div>
      <div className={styles.login_form_cont}>
        <p className={styles.title}>Login</p>
        <p className={styles.subtitle}>
          Welcome back! Please Login to your account To find Dream Home
        </p>
        <div className={styles.details_cont}>
          <form>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.btn_cont}>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginComp;

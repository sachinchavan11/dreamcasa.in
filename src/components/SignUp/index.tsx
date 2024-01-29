import React, { useState } from 'react';
import styles from './index.module.scss';
import { signIn } from 'next-auth/react';

const SignupComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); 
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignup = async () => {
    try {
      // Assuming 'credentials' provider is used for signup
      await signIn('credentials', {
        username,
        password,
        email, // Include email for signup
        redirect: false,
      });
      console.log('Signup Successful');
    } catch (e) {
      console.error('Signup failed', e);
    }
  };

  return (
    <div className={styles.main_cont}>
      <div className={styles.img_cont}>
        <div className={styles.title_cont}>
          <p className={styles.title}>DREAMCASA</p>
          <p className={styles.subtitle}>Right Path to Dream Key</p>
        </div>
        <div className={styles.welcome_cont}>
          <p>WELCOME</p>
          <p>TO YOUR NEW JOURNEY!</p> 
        </div>
      </div>
      <div className={styles.login_form_cont}>
        <p className={styles.title}>Sign Up</p>
        <p className={styles.subtitle}>
          Join us and start your journey to find your Dream Home
        </p>
        <div className={styles.details_cont}>
          <form>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                placeholder="Choose a Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Choose a Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.btn_cont} onClick={handleSignup}>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupComp;

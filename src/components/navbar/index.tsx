import React, { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { Button } from '@mui/material';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className={styles.navbar_main}>
      {nav && (
        <div className={styles.navbar_cont_mobile}>
          <Link onClick={() => setNav(false)} href="/">
            <div className={styles.navbar_items}>Home</div>
          </Link>
          <Link onClick={() => setNav(false)} href="/properties">
            <div className={styles.navbar_items}>Properties</div>
          </Link>
          <Link onClick={() => setNav(false)} href="/blogs">
            <div className={styles.navbar_items}>Blogs</div>
          </Link>
          <Link onClick={() => setNav(false)} href="/referus">
            <div className={styles.navbar_items}>Refer Us</div>
          </Link>
          <Link onClick={() => setNav(false)} href="/contact">
            <div className={styles.navbar_items}>Contact Us</div>
          </Link>
          <Link onClick={() => setNav(false)} href="/about">
            <div className={styles.navbar_items}>About Us</div>
          </Link>
          <div className={styles.login_touch_btn}>
            <div className={styles.btn_container}>
              <button className={styles.btn}>Login</button>
            </div>
            <div>
              <Button
                color="info"
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  height: '42px',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}
                href={'http://wa.me/+918639820425'}
              >
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.navbar_mobile_cont}>
        <div className={styles.navbar_button}>
          <button onClick={() => setNav(!nav)}>
            <div className={`${styles.navbutton_bars}`} />
            <div className={`${styles.navbutton_bars}`} />
            <div className={`${styles.navbutton_bars}`} />
          </button>
        </div>
        <div className={styles.navbar_logo}>
          <div className={styles.animation_container}>
            <Image
              src="/images/logo.png"
              alt="logo_animation"
              layout="fill"
              objectFit="cover"
              className={styles.img}
            />
          </div>
          <div className={styles.test}>
            <p className={styles.title}>DREAMCASA</p>
            <p className={styles.tag}>Right Path to Dream key</p>
          </div>
        </div>
      </div>
      <div className={styles.navbar_cont}>
        <Link href="/">
          <div className={styles.navbar_items}>Home</div>
        </Link>
        <Link href="/properties">
          <div className={styles.navbar_items}>Properties</div>
        </Link>
        <Link href="/blogs">
          <div className={styles.navbar_items}>Blogs</div>
        </Link>
        <Link href="/referus">
          <div className={styles.navbar_items}>Refer Us</div>
        </Link>
        <Link href="/contact">
          <div className={styles.navbar_items}>Contact Us</div>
        </Link>
        <Link href="/about">
          <div className={styles.navbar_items}>About Us</div>
        </Link>
      </div>
      <div className={styles.login_touch_btn}>
        <div className={styles.btn_container}>
          <button className={styles.btn}>Login</button>
        </div>
        <div>
          <Button
            color="info"
            variant="outlined"
            sx={{
              fontWeight: 700,
              color: 'white',
              height: '42px',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
            href={'http://wa.me/+918639820425'}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

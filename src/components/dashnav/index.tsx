import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import styles from './index.module.scss';
import { IoMdHome } from 'react-icons/io';

const Dashnav = () => {
  const router = useRouter();
  const handleImgClick = () => {
    router.push('/');
  };
  const handleClick = () => {
    setIsopen(!isopen);
  };
  const iconColor = "#Ffffff"; 
  const [isopen, setIsopen] = useState(false);
  return (
    <nav className={styles.nav_container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="logo_animation"
            objectFit="cover"
            layout="fill"
            onClick={handleImgClick}
          />
        </div>
        <p className={styles.title} onClick={handleImgClick}>
          DREAMCASA
        </p>
      </div>
      <div className={styles.profile_cont}>
        <div onClick={handleClick}>
          <FaRegUserCircle size={30} color={iconColor} />
        </div>
        {isopen && (
          <div className={styles.list_items}>
            <ul>
              <li>
                Home <IoMdHome />
              </li>
              <li>
                Profile <FaRegUserCircle />
              </li>
              <li>About us</li>
              <li>Contact</li>
              <li>
                <span> Logout</span>
                <IoIosLogOut />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Dashnav;

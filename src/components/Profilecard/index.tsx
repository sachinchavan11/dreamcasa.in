import React from 'react';
import styles from './index.module.scss';
import { ImProfile } from 'react-icons/im';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { MdKeyboardArrowRight } from "react-icons/md";

interface IProfileProps {
  title: string;
  subdesc: string;
}

const Profilecard = (props: IProfileProps) => {
  const { title, subdesc } = props;
  return (
    <div className={styles.main_cont}>
      <div className={styles.profile_icon_cont}>
        <div className={styles.icon_cont}>
          {title == 'Profile Details' ? (
            <ImProfile size={40} />
          ) : (
            <RiLockPasswordFill size={40} />
          )}
        </div>
        <div>
          <MdKeyboardArrowRight  size={28}/>
        </div>
      </div>
      <div>
        <p className={styles.cont_title}>{title}</p>
        <p className={styles.cont_subtitle}> {subdesc}</p>
      </div>
    </div>
  );
};
export default Profilecard;

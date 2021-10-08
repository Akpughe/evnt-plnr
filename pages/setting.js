import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';

import ChangePassword from '../components/ChangePassword';
import UserSettings from '../components/UserSettings';

const setting = () => {
  return (
    <>
      <Navbar />
      <div className={styles.landing}></div>
      <h4 style={{ textAlign: 'center', color: 'white' }}>Settings</h4>
      <div className={istyles.bg_update}>
        <div className={styles.update_wrap}>
          <div className={styles.button_wrap}>
           <UserSettings/>
          </div>
        </div>
        <ChangePassword />
      </div>
    </>
  );
};

export default setting;

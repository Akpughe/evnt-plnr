import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const confirmation = () => {
  return (
    <>
      <Navbar />
      <div className={styles.landing}></div>

      <div style={{color:'white', marginLeft:'200px', marginTop:'100px'}}>
        <h1>Thanks for signing up</h1>
        <p>Follow us on Instagram and contact us here</p>
      </div>
    </>
  );
};

export default confirmation;

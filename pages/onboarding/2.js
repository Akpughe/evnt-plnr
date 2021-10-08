import React from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';
import istyles from '../../styles/Input.module.css';
import Phone from '../../components/Phone';
import Verify from '../../components/Verify';

const phoneVerification = () => {
  return (
    <>
      <Navbar />
      <div className={styles.landing}></div>
      <div style={{ marginLeft: '200px', marginTop: '50px', color: 'white' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '200' }}>
          Create your profile
        </h2>
        <p>Let's your account secure</p>
      </div>

        <div className={istyles.bg}>
         {/* {show === "" ? <Phone openV={() => handleShow('code')} /> : show === 'code' ? <Verify/> : null }  */}
        <Phone/>
        </div>
     
    </>
  );
};

export default phoneVerification;

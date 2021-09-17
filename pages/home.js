import React from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../utils/authContext';
import { useContext } from 'react';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';

const home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className={styles.landing}></div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <div className={istyles.bg_update1}>
          <div className={styles.update_wrap1}>
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/shr9LYCQeUOiMlbHM?backgroundColor=red&layout=card&viewControls=on"
              frameBorder="0"
              //   onmousewheel=""
              width="100%"
              height="533"
              style={{
                background: 'transparent',
                border: '1px',
                solid: '#ccc',
              }}
            >
              {' '}
            </iframe>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }} className={istyles.bg_update1}>
          <div
            style={{ display: 'flex', flexDirection: 'column', color: 'white' }}
          >
            <p>
              <Icon inverted name="instagram" /> Intelligent Crazy People
            </p>
            <p>
              <Icon inverted name="medium m" /> @intelligentcrazypeople
            </p>
            <p>
              <Icon inverted name="facebook f" /> groups/intelligentcrazypeople
            </p>
            <p>
              <Icon inverted name="discord" /> discord.gg/3Mkeu5
            </p>
            <p>
              <Icon inverted name="instagram" /> Instagram
            </p>
            <Link href="/faq">
              <p style={{ cursor: 'pointer' }}>
                <Icon inverted name="info circle" /> Privacy . Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;

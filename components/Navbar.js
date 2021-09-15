import React from 'react';
import { Menu, Icon, Header, Image } from 'semantic-ui-react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
      <Menu secondary className={styles.nav}>
        {/* left */}
        <div>
          <Menu.Item className={styles.heading}>
            {' '}
            <Header as="h2" inverted color="grey" className={styles.heading}>
              <Image  src="/logo/icp-logo.svg" /> <span className={styles.spanH}>Intelligent Crazy People</span> 
            </Header>
          </Menu.Item>
        </div>
        {/* right */}
        <Menu.Menu position="right">
          <div style={{ marginRight: '10px' }}>
            <a
              href="https://instagram.com/intelligentcrazypeople"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon_container}
            >
              <Icon inverted name="instagram" />
            </a>
            <a
              href="https://facebook.com/groups/intelligentcrazypeople"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon_container}
            >
              <Icon inverted name="facebook f" />
            </a>
            <a
              href="https://medium.com/intelligent-crazy-people"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon_container}
            >
              <Icon inverted name="medium m" />
            </a>
          </div>
        </Menu.Menu>
      </Menu>
  );
};

export default Navbar;

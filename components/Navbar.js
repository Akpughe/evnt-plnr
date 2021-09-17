import React, { useContext } from 'react';
import { Menu, Icon, Header, Image } from 'semantic-ui-react';
import styles from '../styles/Navbar.module.css';
import { AuthContext } from '../utils/authContext';
import { isEmpty } from 'lodash';
import Link from 'next/link';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      {isEmpty(user) ? (
        <Menu secondary className={styles.nav}>
          {/* left */}
          <div>
            <Menu.Item className={styles.heading}>
              {' '}
              <Header as="h2" inverted color="grey" className={styles.heading}>
                <Image src="/logo/icp-logo.svg" />{' '}
                <span className={styles.spanH}>Intelligent Crazy People</span>
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
      ) : user.reg ? (
        <Menu className={styles.nav_2}>
          {/* left */}
          <div>
            <Menu.Item className={styles.heading}>
              {' '}
              <Header as="h2" inverted color="grey" className={styles.heading}>
                <Image src="/logo/icp-logo.svg" />{' '}
                <span className={styles.spanH}>Intelligent Crazy People</span>
              </Header>
            </Menu.Item>
          </div>
          {/* right */}
          <Menu.Menu position="right">
            <div style={{ marginRight: '100px' }}>
              {/* <Link href="/"> */}
              <a
                onClick={logout}
                style={{ color: 'white', fontSize: '16px', fontWeight: '500' }}
              >
                Logout
              </a>
              {/* </Link> */}
            </div>
          </Menu.Menu>
        </Menu>
      ) : !user.reg ? (
        <Menu className={styles.nav_2}>
          {/* left */}
          <div>
            <Menu.Item className={styles.heading}>
              {' '}
              <Header as="h2" inverted color="grey" className={styles.heading}>
                <Image src="/logo/icp-logo.svg" />{' '}
                <span className={styles.spanH}>Intelligent Crazy People</span>
              </Header>
            </Menu.Item>
          </div>
          {/* right */}
          <Menu.Menu position="right">
            <div style={{ marginRight: '100px' }}>
              <Link href="/home">
                <a
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '500',
                    margin: '0 5px'
                  }}
                >
                  Home
                </a>
              </Link>
              <Link href="/setting">
                <a
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '500',
                    margin: '0 5px'
                  }}
                >
                  Settings
                </a>
              </Link>
              {/* <Link href="/"> */}
              <a
                onClick={logout}
                style={{ color: 'white', fontSize: '16px', fontWeight: '500', margin: '0 5px' }}
              >
                Logout
              </a>
              {/* </Link> */}
            </div>
          </Menu.Menu>
        </Menu>
      ) : null}
    </>
  );
};

export default Navbar;

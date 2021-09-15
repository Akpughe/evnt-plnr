import React from 'react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { Input, Form, Button } from 'semantic-ui-react';

const Login = ({ openS, openF }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.button_wrap}>
        <Form>
          <Form.Field className={istyles.ffield}>
            <input className={istyles.input} placeholder="Email" />
          </Form.Field>
          <Form.Field className={istyles.ffield}>
            <input
              className={istyles.input}
              placeholder="Password (min 8 characters)"
            />
          </Form.Field>
          <Button
            type="submit"
            className={istyles.button}
            content="Login"
            primary
          />
        </Form>
        <p className={istyles.p}>
          {' '}
          Not a member?{' '}
          <a className={istyles.pointer} onClick={openS}>
            {' '}
            Apply {'>>'}
          </a>
        </p>
        <p className={istyles.p}>
          <a className={istyles.pointer} onClick={openF}>
            {' '}
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

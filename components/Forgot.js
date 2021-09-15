import React from 'react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { Input, Form, Button } from 'semantic-ui-react';

const Forgot = ({ openS }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.button_wrap}>
        <Form>
          <Form.Field className={istyles.ffield}>
            <input className={istyles.input} placeholder="Email" />
          </Form.Field>
          <Button
            type="submit"
            className={istyles.button}
            content="Reset"
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
      </div>
    </div>
  );
};

export default Forgot;

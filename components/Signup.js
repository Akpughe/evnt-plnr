import React from 'react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { Input, Form, Button } from 'semantic-ui-react';

const Signup = ({openL}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.button_wrap}>
        <Form>
          <Form.Field className={istyles.ffield}>
            <input className={istyles.input} placeholder="Full Name" />
          </Form.Field>
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
            content="Apply"
            primary
          />
        </Form>
        <p className={istyles.p}>
          {' '}
          Already have an account <a className={istyles.pointer} onClick={openL}> Log In {'>>'}</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

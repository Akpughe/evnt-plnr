import React from 'react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { Input, Form, Button } from 'semantic-ui-react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../utils/authContext';
const Forgot = ({ openS }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
  });
  console.log(user);

  const { email } = formData;

  const router = useRouter();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/reset`, {
        ...formData,
      })
      .then((res) => {
        res.data;
        // console.log(res.data);
        // alert('Done');
        return router.push(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.button_wrap}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Field className={istyles.ffield}>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => onChange(e)}
              className={istyles.input}
              placeholder="Email"
              required
            />
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

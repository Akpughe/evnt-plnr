import React from 'react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { Input, Form, Button } from 'semantic-ui-react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../utils/authContext';

const Signup = ({ openL }) => {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(true);
  const [reg, setReg] = useState(true);

  const { fullname, email, password } = formData;

  const router = useRouter();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/register`, {
        ...formData,
      })
      .then((res) => {
        signup(res.data, rememberMe, reg);
        setReg();
        setRememberMe();
        // console.log(res.data);
        // alert('Done');
        return router.push(`/onboarding/2`);
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
              name="fullname"
              type="text"
              value={fullname}
              onChange={(e) => onChange(e)}
              className={istyles.input}
              placeholder="Full Name"
              required
            />
          </Form.Field>
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
          <Form.Field className={istyles.ffield}>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
              className={istyles.input}
              placeholder="Password (min 8 characters)"
              required
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
          Already have an account{' '}
          <a className={istyles.pointer} onClick={openL}>
            {' '}
            Log In {'>>'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

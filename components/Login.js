import React from 'react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { Input, Form, Button } from 'semantic-ui-react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../utils/authContext';

const Login = ({ openS, openF }) => {
  const { login, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  console.log(user);
  const [rememberMe, setRememberMe] = useState(true);

  const { email, password } = formData;

  const router = useRouter();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
        ...formData,
      })
      .then((res) => {
        login(res.data, rememberMe);
        setRememberMe();
        // console.log(res.data);
        // alert('Done');
        return router.push(`/home`);
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

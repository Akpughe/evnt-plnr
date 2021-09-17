import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../utils/authContext';
import { Input, Form, Button } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import ChangePassword from '../components/ChangePassword';
const setting = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const uid = user.user._id;
  const token = user.token;

  const [formData, setFormData] = useState({
    id: uid,
    fullname: '',
    email: '',
    digits: '',
    password: '',
  });

  const { fullname, email, digits, password } = formData;

  const router = useRouter();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/user/edit`, {
        ...formData,
        headers: {
          'x-auth-token': `${token}`,
        },
      })
      .then((res) => {
        res.data;
        // console.log(res.data);
        // alert('Done');
        return router.push(`/home`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className={styles.landing}></div>
      <h4 style={{ textAlign: 'center', color: 'white' }}>Settings</h4>
      <div className={istyles.bg_update}>
        <div className={styles.update_wrap}>
          <div className={styles.button_wrap}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Form.Field className={istyles.ffield_u}>
                <label className={istyles.label_u} type="text" htmlFor="">
                  Change your name
                </label>
                <input
                  name="fullname"
                  value={user.user.fullname || fullname}
                  onChange={(e) => onChange(e)}
                  className={istyles.input}
                  placeholder=""
                />
              </Form.Field>
              <Form.Field className={istyles.ffield}>
                <label className={istyles.label_u} type="text" htmlFor="">
                  Change your email
                </label>
                <input
                  name="email"
                  value={email || user.user.email}
                  onChange={(e) => onChange(e)}
                  className={istyles.input}
                  placeholder=""
                />
              </Form.Field>
              <Form.Field className={istyles.ffield}>
                <label className={istyles.label_u} type="text" htmlFor="">
                  Change your phone number
                </label>
                <input
                  name="digits"
                  value={digits || user.user.digits}
                  onChange={(e) => onChange(e)}
                  className={istyles.input}
                  placeholder=""
                />
              </Form.Field>
              <Form.Field className={istyles.ffield}>
                <label className={istyles.label_u} type="text" htmlFor="">
                  Enter password to save changes
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  className={istyles.input}
                  placeholder=""
                  required
                  type="password"
                />
              </Form.Field>
              <Button
                type="submit"
                className={istyles.button_phone}
                content="Update"
                primary
              />
            </form>
          </div>
        </div>
        <ChangePassword />
      </div>
    </>
  );
};

export default setting;

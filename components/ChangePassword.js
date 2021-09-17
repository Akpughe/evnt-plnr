import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../utils/authContext';
import { Input, Form, Button } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';

const ChangePassword = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const uid = user.user._id;
  const token = user.token;

  const [formData, setFormData] = useState({
    _id: uid,
    password: '',
    confirmPassword: '',
  });

  const { password, confirmPassword } = formData;

  const router = useRouter();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/user/editPassword`, {
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
      <div className={istyles.bg_update}>
        <h4 style={{ textAlign: 'center', color: 'white' }}>Change Password</h4>
        <div className={styles.update_wrap}>
          <div className={styles.button_wrap}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Form.Field className={istyles.ffield_u}>
                <label className={istyles.label_u} type="text" htmlFor="">
                  Password
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  className={istyles.input}
                  placeholder=""
                  type="password"
                />
              </Form.Field>

              <Form.Field className={istyles.ffield}>
                <label className={istyles.label_u} type="text" htmlFor="">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  value={confirmPassword}
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
      </div>
    </>
  );
};

export default ChangePassword;

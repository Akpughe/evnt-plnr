import React, { useContext, useState } from 'react';
import { AuthContext } from '../utils/authContext';
import Navbar from '../components/Navbar';
import { Input, Form, Button } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const Verify = ({ p }) => {
  const { user } = useContext(AuthContext);
  console.log(user.user);
  const pn = user.digits;
  console.log(pn);
  const [formData, setFormData] = useState({
    digits: '',
    code: '',
  });
  console.log();
  const { code, digits } = formData;
//   console.log(...formData);
  const router = useRouter();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/confirm`, {
            ...formData,
          })
          .then((res) => {
            console.log(res.data);
            console.log({...formData});
            // alert('Done');
            // setP(res.data.phone.ph)
            router.push('/confirmation')
            // alert('done')
          })
          .catch((err) => {
            console.log(err);
          });
      };
  //   const handleSubmit = () => {
  //       alert('done')
  //   }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.button_wrap}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Form.Field className={istyles.ffield}>
              <label className={istyles.label} type="text" htmlFor="">
                Enter Phone Number again
              </label>
              <input
                name="digits"
                value={digits}
                onChange={(e) => onChange(e)}
                className={istyles.input}
                placeholder=""
                required
              />
            </Form.Field>
            <Form.Field className={istyles.ffield}>
              <label className={istyles.label} type="text" htmlFor="">
                Enter verification code
              </label>
              <input
                name="code"
                value={code}
                onChange={(e) => onChange(e)}
                className={istyles.input}
                placeholder=""
                required
              />
            </Form.Field>
            <Button
              type="submit"
              className={istyles.button_phone}
              content="Verify"
              primary
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Verify;

import React, { useContext, useState } from 'react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';
import { Input, Form, Button } from 'semantic-ui-react';
import { AuthContext } from '../utils/authContext';
import Verify from './Verify';
import { useRouter } from 'next/router';
import axios from 'axios';

const Phone = ({openV}) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const uid = user.user.id;
  const [hide, setHide] = useState(false)
  const [p, setP] = useState(false)
  const [formData, setFormData] = useState({
    digits: '',
    _id: uid,
  });

  const { digits } = formData;

  const router = useRouter();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/add`, {
        ...formData,
      })
      .then((res) => {
        console.log(res.data);
        console.log({...formData});
        // alert('Done');
        // setP(res.data.phone.ph)
        router.push('/onboarding/3')
        // alert('done')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.button_wrap}>
        <Form onSubmit={(e)=> handleSubmit(e)}>
          <Form.Field className={istyles.ffield}>
            <label className={istyles.label} type="text" htmlFor="">
              Phone number
            </label>
            <input
              name="digits"
              value={digits}
              onChange={(e) => onChange(e)}
              className={istyles.input}
              placeholder="Phone number"
              required
            />
          </Form.Field>
          <Button
            type="submit"
            className={istyles.button_phone}
            content="Send"
            // onClick={openV}
            primary
          />
        </Form>
        {/* verify*/}
        {/* {hide && <Verify digit= {p}/> } */}
        
      </div>
    </div>
  );
};

export default Phone;

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

import {motion} from 'framer-motion'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.6, -0.06, 0.01, 0.99],
      },
    },
  };
  const products = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1.2,
      transition: {
        duration: 1.1,
        ease: [0.6, -0.08, 0.01, 0.99],
      },
    },
  };
  const infoLogin = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1.5,
      transition: {
        duration: 1.1,
        ease: [0.6, -0.08, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={content}
      >
    <FormContainer>
      <motion.h1 variants={title}>Login</motion.h1>
      <motion.section variants={products}> 
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled={isLoading} type='Einlogen' variant='primary'>
          Login
        </Button>

        {isLoading && <Loader />}
      </Form>
    </motion.section>
    <motion.section variants={infoLogin}>
      <Row className='py-3'>
        <Col>
          Neu hier?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Registrieren
          </Link>
        </Col>
      </Row>

</motion.section>
    </FormContainer>
    </motion.div>
    </motion.section>
  );
};

export default LoginScreen;


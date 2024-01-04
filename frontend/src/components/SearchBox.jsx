import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };
   
  const searchBox = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.06, 0.01, 0.99],
      },
    },
  };

  return ( 
    <motion.section variants={searchBox}>  
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
      style={{fontSize:'13px'}}
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Gold, Silber...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button style={{fontSize:'12px'}} type='submit' variant='outline-light' className='p-2 mx-2 searchbtn'>
        Suchen
      </Button>
    </Form>
    </motion.section>
  );
};

export default SearchBox;

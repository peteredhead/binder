import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <Spinner animation="border" /> Loading...
    </div>
  )
}

export default Loader;

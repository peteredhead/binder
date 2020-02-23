import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import './CardImage.css';

const CardImage = ({ imageUris }) => {
  const [loading, setLoading] = useState(true);

  const { small, normal, large } = imageUris;

  return (
    <div className='image'>
      { loading ?
        <Spinner animation='border' className='imageSpinner' />
        :
        null
      }
      <img
        srcSet={`${small} 146w, ${normal} 680w, ${large} 936w`}
        sizes='(max-width: 400px) 146px, (max-width: 1400px) 680px, 936px'
        src={small}
        alt='Card preview'
        onLoad={() => { setLoading(false); }}
      />
    </div>
  )
}

CardImage.propTypes = {
  imageUris: PropTypes.object.isRequired
};

export default CardImage;

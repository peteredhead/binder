import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert'

const ErrorMessage = ({ error }) => {
  return (
    <Alert show variant='danger'>
      {error}
    </Alert>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorMessage;

import React from 'react';
import Alert from 'react-bootstrap/Alert'

const ErrorMessage = ({ error }) => {
  return (
    <Alert show variant='danger'>
      {error}
    </Alert>
  )
}

export default ErrorMessage;

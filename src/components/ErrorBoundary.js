import React, { Component } from 'react';
import ErrorMessaage from './ErrorMessage';

class ErrorBoundary extends Component {
  state = { showError: false };

  static getDerivedStateFromError(error) {
    return { showError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development mode
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log(errorInfo);
    }
  }

  render() {
    if (this.state.showError) {
      const msg = 'Sorry, something went wrong. Please try again later';
      return <ErrorMessaage error={msg} />
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

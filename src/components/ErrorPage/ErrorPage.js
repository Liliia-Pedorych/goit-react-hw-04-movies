import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      404 ERROR Back to <Link to="/">HomePage</Link> please
    </div>
  );
};

export default ErrorPage;

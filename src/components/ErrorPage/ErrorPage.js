import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.title}>
      404 ERROR Back to{' '}
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>{' '}
      page please
    </div>
  );
};

export default ErrorPage;

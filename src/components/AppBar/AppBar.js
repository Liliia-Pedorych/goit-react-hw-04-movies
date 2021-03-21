import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.wraper}>
        <ul>
          <li>
            <NavLink
              exact
              to={routes.home}
              className={styles.link}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.movies}
              className={styles.link}
              activeClassName={styles.active}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default AppBar;

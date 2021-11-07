import * as React from 'react';
import {hot } from 'react-hot-loader/root';
import styles from './header.css';

function HeaderComponent() {
  return (
    <div>
      <h1 className={styles.example}>Hello React</h1>
    </div>
  );
};

export const Header = hot(HeaderComponent);
import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={ styles.userLink }>
      <img
        className={styles.avatar}
        src="https://cdn.dribbble.com/users/77241/avatars/mini/e3a0069803b02cfdb3cb9031ecd3b12e.jpg?1599151966" 
        alt="avatar"
      />
      <a className={ styles.username } href="#user-url">Дмитрий Гришин</a>
    </div>
  );
}

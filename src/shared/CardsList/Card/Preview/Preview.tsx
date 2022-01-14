import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={ styles.preview }>
      <img
        className={ styles.previewImg }
        src="https://cdn.dribbble.com/users/441606/screenshots/17275104/media/8b4fb847743b329f3fb943698b305a77.png?compress=1&resize=400x300"
        alt="1111"/>
    </div>
  );
}

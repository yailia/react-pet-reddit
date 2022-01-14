import React from 'react';
import { Title } from './Title';
import styles from './textcontent.css';
import { UserLink } from './UserLink';

export function TextContent() {
  return (
    <div className={ styles.textContent }>
      <div className={ styles.metaData }>
        <UserLink />
        <span className={ styles.createdAt }>
          <span className={ styles.publishedLabel }>Опубликовано</span>
          4 часа назад
        </span>
      </div>
      <Title />
    </div>
  );
}

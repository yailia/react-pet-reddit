import React from 'react';
import { useUserAbout } from '../../../../../hooks/useUserAbout';
import styles from './userlink.css';

interface IUserLink {
  author: string;
}

interface IAuthorData {
  name: string;
  snoovatar_img: string; 
}

export function UserLink(props: IUserLink) {
  const [authorData]: any = useUserAbout(props.author)
  return (
    <div className={ styles.userLink }>
      <img
        className={styles.avatar}
        src={authorData.icon_img}
        alt="avatar"
      />
      <a className={ styles.username } href="#user-url">{authorData.name}</a>
    </div>
  );
}

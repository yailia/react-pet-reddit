import React from 'react';
import { EIcon } from '../../../../../enums/EIcon';
import { useUserAbout } from '../../../../../hooks/useUserAbout';
import { Icon } from '../../../../Icon';
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
      {
        authorData.snoovatar_img ?  (
          <img
            className={styles.avatar}
            src={authorData.snoovatar_img}
            alt="avatar"
          />
        ) :
        <div className={styles.avatar}>
          <Icon name={EIcon.Anon} size={16}/>
        </div>
      }
      <a className={ styles.username } href="#user-url">{authorData.name}</a>
    </div>
  );
}

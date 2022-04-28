import React from 'react';
import { EColor } from '../../../../enums/EColor';
import { EIcon } from '../../../../enums/EIcon';
import { Icon } from '../../../Icon';
import { Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock(props: IUserBlockProps) {
  return (
    <a
      href='https://www.reddit.com/api/v1/authorize?client_id=5iOVxSKsbB4vl3F-STR1xQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit'
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        { 
          props.avatarSrc ?
            <img src={props.avatarSrc} alt="user avatar" className={styles.avatarImage} /> :
            <Icon name={EIcon.Anon} />
        }
      </div>
      <div className={styles.username}>
        <Text size={20} color={props.username ? EColor.black : EColor.gray99}>{props.username || "Аноним" }</Text>
      </div>
    </a>
  );
}

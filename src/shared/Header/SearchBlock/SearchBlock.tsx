import React, { useContext } from 'react';
import { UserBlock } from './UserBlock';
import styles from './searchblock.css';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
  const userData = useContext(userContext)
  return (
    <div className={ styles.searchBlock }>
      <UserBlock avatarSrc={userData.iconImg} username={userData.name}/>
    </div>
  );
}

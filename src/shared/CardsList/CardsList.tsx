import React, { useContext } from 'react';
import { generateId } from '../../utils/react/getRandomIndex';
import { postContext } from '../context/postContext';
import { Spinner } from '../Spinner';
import { Card } from './Card';
import styles from './cardslist.css';



export function CardsList() {
  const data = useContext(postContext).map(generateId);
  return (
    <ul className={styles.cardsList}>
      {
        data.map(i => (
          <Card
            key={i.id}
            author={i.data.author}
            author_fullname={i.data.author_fullname}
            created={i.data.created}
            title={i.data.title}
            url={i.data.url}
            thumbnail={i.data.thumbnail}
          />
        ))
      }
    </ul>
  );
}

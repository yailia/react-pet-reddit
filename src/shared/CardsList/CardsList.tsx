import React, { useContext } from 'react';
import { postContext } from '../context/postContext';
import { Card } from './Card';
import styles from './cardslist.css';



export function CardsList() {
  const data = useContext(postContext);
  console.log(data)
  return (
    <ul className={styles.cardsList}>
      {
        data.map(i => {
          console.log()
          return (
          <Card
            key={i.data.id}
            author={i.data.author}
            author_fullname={i.data.author_fullname}
            created={i.data.created}
            title={i.data.title}
            url={i.data.url}
            thumbnail={i.data.thumbnail}
            selftext={i.data.selftext}
          />
        )})
      }
    </ul>
  );
}

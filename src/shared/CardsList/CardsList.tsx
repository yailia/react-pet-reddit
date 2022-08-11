import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { postContext } from '../context/postContext';
import { Card } from './Card';
import styles from './cardslist.css';



export function CardsList() {
  const data = useContext(postContext);

  return (
    <ul className={styles.cardsList}>
      {
        data.map(i => {
          return (
            <Card
              key={i.data.id}
              id={i.data.id}
              subreddit={i.data.subreddit}
              author={i.data.author}
              author_fullname={i.data.author_fullname}
              created={i.data.created}
              title={i.data.title}
              url={i.data.url}
              thumbnail={i.data.thumbnail}
              selftext={i.data.selftext}
            />
          )
        })
      }
    </ul>
  );
}

import React, { ReactNode, useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitleProps{
  title: string;
  url?: string;
  selftext?: ReactNode;
  id: string;
  subreddit: string;
}

export function Title(props: ITitleProps) {
   const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <h2 className={ styles.title }>
        <a 
          className={ styles.postLink }
          onClick={() => setIsModalOpened(true)}
        >
          {props.title} 
        </a>
      </h2>
      {
        isModalOpened && (
          <Post
            article={props.id}
            subreddit={props.subreddit}
            title={props.title}
            content={props.selftext} 
            onClose={() => {setIsModalOpened(false)}}
          />
        )
      }
  </>
  );
}

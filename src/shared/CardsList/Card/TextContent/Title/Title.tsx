import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
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
  return (
      <h2 className={ styles.title }>
        <Link to={'/posts/' + props.id}
          className={ styles.postLink }
        >
          {props.title} 
        </Link>
      </h2>
  );
}

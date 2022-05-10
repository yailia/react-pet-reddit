import React, { ReactNode } from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  author: string;
  author_fullname: string;
  created: number;
  title: string;
  url: string;
  thumbnail: string;
  id: string;
  selftext?: ReactNode;
  subreddit: string;
}

export function Card(props: ICardProps) {
  return (
    <li className={ styles.card }>
      <TextContent
        author_fullname={props.author_fullname} 
        author={props.author}
        created={props.created}
        title={props.title}
        url={props.url}
        selftext={props.selftext}
        id={props.id}
        subreddit={props.subreddit}
      />
      <Preview thumbnail={props.thumbnail} title={props.title}/>
      <Menu />
      <Controls />
    </li>
  );
}

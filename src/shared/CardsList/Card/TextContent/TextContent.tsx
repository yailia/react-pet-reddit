import React from 'react';
import { Title } from './Title';
import styles from './textcontent.css';
import { UserLink } from './UserLink';

interface ITextContentProps {
  title: string;
  url: string;
  created: number;
  author: string;
  author_fullname: string;
}

export function TextContent(props: ITextContentProps) {
  const postTime = new Date(props.created * 1000).toLocaleString();
  return (
    <div className={ styles.textContent }>
      <div className={ styles.metaData }>
        <UserLink author={props.author}/>
        <span className={ styles.createdAt }>
          <span className={ styles.publishedLabel }>Опубликовано</span>
          {postTime}
        </span>
      </div>
      <Title 
        title={props.title}
        url={props.url}
      />
    </div>
  );
}

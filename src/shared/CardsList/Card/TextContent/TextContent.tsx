import React, { ReactNode } from 'react';
import { Title } from './Title';
import { UserLink } from './UserLink';
import { getTimePass } from '../../../../utils/react/getTimePass';
import styles from './textcontent.css';
import { hoursEnding } from '../../../../utils/react/hoursEnding';

interface ITextContentProps {
  title: string;
  url: string;
  created: number;
  author: string;
  author_fullname: string;
  selftext?: ReactNode;
}

export function TextContent(props: ITextContentProps) {
  const time = getTimePass(props.created)
  return (
    <div className={ styles.textContent }>
      <div className={ styles.metaData }>
        <UserLink author={props.author}/>
        <span className={ styles.createdAt }>
          <span className={ styles.publishedLabel }>Опубликовано</span>
          {`${time} ${time.toString().length <= 2 && hoursEnding(time)}`}
        </span>
      </div>
      <Title 
        title={props.title}
        url={props.url}
        selftext={props.selftext}
      />
    </div>
  );
}

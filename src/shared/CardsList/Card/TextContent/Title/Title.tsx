import React from 'react';
import styles from './title.css';

interface ITitleProps{
  title: string;
  url: string;
}

export function Title(props: ITitleProps) {
  return (
    <h2 className={ styles.title }>
      <a className={ styles.postLink } href={props.url}>
        {props.title} 
      </a>
    </h2>
  );
}

import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  thumbnail: string;
  title: string;
}

export function Preview(props: IPreviewProps) {
  return (
    <div className={ styles.preview }>
      <img
        className={ styles.previewImg }
        src={props.thumbnail.includes('http') ? props.thumbnail : 'https://via.placeholder.com/190'}
        alt={props.title}/>
    </div>
  );
}

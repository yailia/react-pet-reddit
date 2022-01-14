import React from 'react';
import styles from './content.css';

interface IContent {
  children?: React.ReactNode
}

export function Content({ children }: IContent) {
  return (
    <main className={ styles.content }>
      { children }
    </main>
  );
}

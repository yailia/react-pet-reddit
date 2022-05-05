import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom'
import { CommentForm } from '../CommentForm';

interface IPostProps {
  title: string;
  content?: ReactNode;
  onClose?: () => void;
}

export function Post(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick (e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        props.onClose?.()
      }
    }
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  const node = document.querySelector('#modal-root');
  if (!node) return null;
  return ReactDOM.createPortal(
    (
    <div className={styles.modal} ref={ref}>
      <h2>{props.title}</h2>
      <div className={styles.content}>
        {props.content}
      </div>
      <CommentForm />
    </div>
    ), node);
}

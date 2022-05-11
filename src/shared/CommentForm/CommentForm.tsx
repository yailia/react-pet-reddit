import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
  value: string;
  submitHandle: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}


export function CommentForm(props: ICommentFormProps) {
  return (
    <form className={styles.form} onSubmit={props.submitHandle}>
      <textarea className={styles.input} onChange={props.handleChange} value={props.value}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}

import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { commentContext } from '../context/commentContext';
import styles from './commentform.css';


export function CommentForm() {
  const {onChange, value} = useContext(commentContext);

  function handleChange (e: ChangeEvent<HTMLTextAreaElement>) {
    onChange(e.target.value)
  }
  function submitHandle (e: FormEvent) {
    e.preventDefault();
  }
  
  return (
    <form className={styles.form} onSubmit={submitHandle}>
      <textarea className={styles.input} onChange={handleChange} value={value}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}

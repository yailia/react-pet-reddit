import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { TRootState, updateComment } from '../../store';
import styles from './commentform.css';


export function CommentForm() {
  const value = useSelector<TRootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange (e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
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

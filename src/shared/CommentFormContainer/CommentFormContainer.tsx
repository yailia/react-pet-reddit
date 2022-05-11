import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateComment } from '../../store';
import { CommentForm } from '../CommentForm/CommentForm';


export function CommentFormContainer() {
  const value = useSelector<TRootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange (e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }
  function submitHandle (e: FormEvent) {
    e.preventDefault();
  }
  
  return (
    <CommentForm
      handleChange={handleChange}
      submitHandle={submitHandle}
      value={value}
    />
  );
}

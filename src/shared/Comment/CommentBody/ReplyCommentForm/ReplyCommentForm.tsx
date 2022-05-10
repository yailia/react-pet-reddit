import React, { useEffect, useRef, useState } from 'react';
import styles from './replycommentform.css';

interface initialValue {
  initialValue?: string;
  isOpened: boolean;
}

export function ReplyCommentForm(props: initialValue) {
  const [value, setValue] = useState(props.initialValue);
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, [props.isOpened])
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
    <textarea ref={ref} className={styles.input} onChange={(e) => setValue(e.currentTarget.value)} value={value}/>
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>
  );
}

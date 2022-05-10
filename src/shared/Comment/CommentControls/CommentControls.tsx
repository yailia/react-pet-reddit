import React, { useState } from 'react';
import { ArrowDown } from '../../Icon/Icons/ArrowDown';
import { ArrowUp } from '../../Icon/Icons/ArrowUp';
import styles from './commentcontrols.css';

interface ICommentControls {
  setIsOpen: (e: boolean) => void;
}

export function CommentControls(props: ICommentControls) {
  return (
    <>
      <div className="commentTreeControl">
          <div className={styles.commentTreeControlBtns}>
            <button className={styles.commentTreeBtnHide} onClick={() => props.setIsOpen(false)}><ArrowUp/></button>
            <button className="commentTreeBtnShow" onClick={() => props.setIsOpen(true)}><ArrowDown /></button>
          </div>
      </div>
      <div className={styles.commentTreeControlLine}></div>
    </>
  );
}

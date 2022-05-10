import React, { ReactNode, useState } from 'react';
import { EColor } from '../../../enums/EColor';
import { EIcon } from '../../../enums/EIcon';
import { CommentForm } from '../../CommentForm';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import styles from './commentbody.css';
import { ReplyCommentForm } from './ReplyCommentForm';

interface ICommentBody {
  body: string;
  children?: ReactNode;
  author?: string;
}

export function CommentBody(props: ICommentBody) {
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  return (
    <div className={styles.CommentBody}>
      <div className={styles.commentText}>
        {props.body}
      </div>
      <ul className={styles.commentBodyMenu}>
        <li className={styles.menuItem} onClick={() => setIsReplyOpen(!isReplyOpen)}>
          <Icon name={EIcon.Comment} size={35}/>
          <Text size={12} color={EColor.gray99}>Ответить</Text>
        </li>
        <li className={styles.menuItem}>
          <Icon name={EIcon.Share} size={12}/>
          <Text size={12} color={EColor.gray99}>Поделиться</Text>
        </li>
        <li className={styles.menuItem}>
          <Icon name={EIcon.Hide} size={12}/>
          <Text size={12} color={EColor.gray99}>Пожаловаться</Text>
        </li>
      </ul>
      {
        isReplyOpen && <ReplyCommentForm initialValue={props.author} isOpened={isReplyOpen}/>
      }
      {props.children}
    </div>
  );
}

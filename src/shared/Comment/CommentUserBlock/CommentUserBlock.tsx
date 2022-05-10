import React from 'react';
import { EIcon } from '../../../enums/EIcon';
import { useUserAbout } from '../../../hooks/useUserAbout';
import { getTimePass } from '../../../utils/react/getTimePass';
import { hoursEnding } from '../../../utils/react/hoursEnding';
import { Icon } from '../../Icon';
import styles from './сommentUserBlock.css';

interface ICommentUserBlockProps {
  author_fullname: string;
  created: number;
  subreddit: string;
}
export function CommentUserBlock(props: ICommentUserBlockProps) {
  const time = getTimePass(props.created)
  const [authorData]: any = useUserAbout(props.author_fullname)
  return (
      <div className={styles.userData}>
        <span className={styles.userAvatar}>
        {
        authorData.snoovatar_img ?  (
          <img
            className={styles.avatar}
            src={authorData.snoovatar_img}
            alt="avatar"
          />
        ) :
        <div className={styles.avatar}>
          <Icon name={EIcon.Anon} size={16}/>
        </div>
      }
        </span>
        <span className={styles.userName}>{authorData.name}</span>
        <span className={styles.userCommentTime}>{`${time} ${time.toString().length <= 2 && hoursEnding(time)}`}</span>
        <span className={styles.userLeague}>{props.subreddit}</span>
      </div>
  );
}

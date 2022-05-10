import React, { ReactNode, useState } from 'react';
import { CommentBody } from './CommentBody';
import { CommentControls } from './CommentControls';
import { CommentUserBlock } from './CommentUserBlock';
import styles from './comment.css';
import { IPostComment } from '../Post/PostComments';

interface ICommentProps {
  author: string;
  body: string;
  created: number;
  parent_id: string;
  replies?: ICommentRepliestProps[];
  score: number;
  subreddit: string;
  id: string;
  children?: ReactNode;
}

interface ICommentRepliestProps {
  data: ICommentProps
}


export function Comment(props: ICommentProps) {
  const [isChildCommentOpen, setIsChildCommentOpen] = useState(false);
  return (
    <div className={styles.comment}>
     <CommentControls setIsOpen={setIsChildCommentOpen}/>
     <CommentUserBlock
      author_fullname={props.author}
      created={props.created}
      subreddit={props.subreddit}
     />
       <CommentBody author={props.author} body={props.body}>
         {
           props.replies && props.replies.map(i => {
             return (
               <Comment 
                key={i.data.id}
                author={i.data.author}
                body={i.data.body}
                created={i.data.created}
                parent_id={i.data.parent_id}
                score={i.data.score}
                subreddit={i.data.subreddit}
                id={i.data.id}
               />
             )
           })
         }
       </CommentBody>
    </div>
  );
}

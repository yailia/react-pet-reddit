import React, { useEffect, useState } from 'react';
import { useCommentsTree } from '../../../hooks/useCommentsTree';
import { Comment } from '../../Comment';
import { Spinner } from '../../Spinner';
import styles from './postcomments.css';

export interface IPostComment {
  subreddit: string;
  article: string;
}

export function PostComments (props: IPostComment) {
  const [{ commentsTree, isLoading }] = useCommentsTree(props.subreddit, props.article);
  const isArray = Array.isArray(commentsTree);
  
  return (
    <>
    {
      isLoading && <Spinner />
    }
    { 
      isArray && commentsTree.map(i => {
        const isReplies = i.data.replies ? i.data.replies.data.children : null;
        return (
          <Comment 
            key={i.data.id}
            author={i.data.author}
            body={i.data.body}
            created={i.data.created}
            parent_id={i.data.parent_id}
            replies={isReplies}
            score={i.data.score}
            subreddit={i.data.subreddit}
            id={i.data.id}
          />
        )})
    }
    
    </>
  )
}

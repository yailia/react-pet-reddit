import React, { ReactNode, useContext, useEffect, useMemo, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom'
import { PostComments } from './PostComments';
import { CommentFormContainer } from '../CommentFormContainer/CommentFormContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { postContext } from '../context/postContext';

export function Post() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const posts = useContext(postContext);
  const post = useMemo(() => {
    return posts.find(el => {
      return el.data.id === id;
    });
  }, [id, posts])
  
  if (!post) return null;

  useEffect(() => {
    function handleClick (e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        navigate("/")
      }
    }
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  const node = document.querySelector('#modal-root');
  if (!node) return null;
  return ReactDOM.createPortal(
    (
    <div className={styles.modal} ref={ref}>
      <h2>{post?.data.title}</h2>
      <div className={styles.content}>
        {post.data.selftext}
      </div>
      <CommentFormContainer />
      <PostComments subreddit={post.data.subreddit} article={post.data.id}/>
    </div>
    ), node);
}

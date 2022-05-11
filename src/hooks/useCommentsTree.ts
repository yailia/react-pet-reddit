import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../store";

interface ICommentsData {
  data: IComments[];
}

interface IComments {
  author_fullname: string;
  author: string;
  body: string;
  created: number;
  parent_id: string;
  replies: IRepliesData;
  score: number;
  subreddit: string;
  id:string;
}

interface IRepliesData {
  data: IRepliesDataProps;
}

interface IRepliesDataProps {
  children: ICommentsData;
}

export function useCommentsTree (subreddit: string, article:string) {
  const [commentsTree, setCommentsTree] = useState<ICommentsData>();
  const [isLoading, setIsLoading] = useState(false)
  const token = useSelector<TRootState, string>(state => state.token);
  try {
    useEffect(() => {
      setIsLoading(true)
      axios.get(`https://oauth.reddit.com/r/${subreddit}/comments/${article}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/x-www-form-urlencoded',
        }
      })
        .then((r) => {
          setCommentsTree(r?.data[1].data.children)
        })
        .finally(()=> setIsLoading(false))
      }, [token])
    } catch(e) {
      console.log(e);
    }
      return [{commentsTree, isLoading}];
  }
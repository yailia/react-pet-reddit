import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

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
  const token = useContext(tokenContext)
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
      }, [])
    } catch(e) {
      console.log(e);
    }
      return [{commentsTree, isLoading}];
  }
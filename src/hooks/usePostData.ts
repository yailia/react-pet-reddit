import axios from "axios";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../store/store";

interface IPostsData {
  data: IPostData;
}
interface IPostData {
  author: string;
  author_fullname: string;
  created: number;
  title: string;
  url: string;
  thumbnail: string;
  id: string;
  selftext: ReactNode;
  subreddit: string;
}

export function usePostData() {
  const token = useSelector<TRootState, string>(state => state.token);
  const [postData, setPostData] = useState<Array<IPostsData>>([]);
  const [loading, setLoading] = useState(false);
  const [nextAfter, setNextAfter] = useState('');
  const [textErr, setTextErr] = useState('');
  const [isReaded, setIsReaded] = useState(false);
  const [count, setCount] = useState(1);
  const [isMore, setIsMore] = useState(false);

  const getResponce = useCallback (() => {
    if (!token) {
      setTextErr("Пройдите авторизацию");
      return
    }
    setCount(p => p + 1);

    if(count % 3 === 0 && count !== 0) {
      setIsMore(true);
    } else {
      setIsMore(false);
    }
    if (nextAfter === null) {
      setIsReaded(true);
      return;
    }
    setLoading(true);
    axios.get('https://oauth.reddit.com/best/',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: {
          after: nextAfter,
          limit: 10,
        }
      }).then((r) => {
        setPostData(prev => prev.concat(r?.data.data.children));
        setNextAfter(r?.data.data.after);
        setTextErr('');
      }).catch(e => {
        setTextErr(`Ошибка при загрузке списка постов. Текст ошибки: ${e.message}`);
      }).finally(() => setLoading(false))
    console.log("after", nextAfter)
  }, [token, nextAfter])

  return { postData, loading, textErr, getResponce, token, isReaded, isMore };
}
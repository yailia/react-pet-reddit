import React, { createContext, ReactNode } from "react";
import { usePostData } from "../../hooks/usePostData";
import { Spinner } from "../Spinner";

interface IPostContextProviderProps {
  children: ReactNode;
}

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

export const postContext = createContext<IPostsData[]>([]);

export function PostContextProvider (props: IPostContextProviderProps) {
  const [{postData, loading}] = usePostData();
  return (
    <postContext.Provider value={postData}>
      {loading && <Spinner />}
      {props.children}
    </postContext.Provider>
  )
}
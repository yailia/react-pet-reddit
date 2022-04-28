import React, { createContext, ReactNode } from "react";
import { usePostData } from "../../hooks/usePostData";

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
}

export const postContext = createContext<IPostsData[]>([]);

export function PostContextProvider (props: IPostContextProviderProps) {
  const [data] = usePostData();
  return (
    <postContext.Provider value={data}>
      {props.children}
    </postContext.Provider>
  )
}
import React, { createContext, ReactNode, useEffect, useRef, useState } from "react";
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
  id: string;
  selftext: ReactNode;
  subreddit: string;
}

export const postContext = createContext<IPostsData[]>([]);


export function PostContextProvider(props: IPostContextProviderProps) {
  const obsEl = useRef<HTMLDivElement>(null);
  const { postData, loading, textErr, getResponce, token, isReaded, isMore } = usePostData();
  useEffect(() => {
    if(isMore) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.every((i) => i.isIntersecting)) {
        getResponce();
        console.log(entries.every((i) => i.intersectionRect))
      }
    }, {
      threshold: 0.5,
    });
    const divObsEl = obsEl.current;
    if (divObsEl) {
      observer.observe(divObsEl);
      return () => observer.disconnect();
    }
  }, [token, getResponce, isMore])
  return (
    <postContext.Provider value={postData}>
      <div ref={obsEl}>
        {
          textErr ? <div style={{ textAlign: "center" }}>{textErr}</div> :
            props.children 
        }
      {loading && <div style={{ textAlign: "center", width: "100%" }}>Загрузка ... </div>}
      </div>
      {isReaded && <div style={{ textAlign: "center", width: "100%" }}>Все посты прочитаны</div>}
      {
        isMore && !isReaded && <div style={{ textAlign: "center" }}><button type="button" onClick={getResponce}>ЕЩЕ</button></div>
      }
    </postContext.Provider>
  )
}
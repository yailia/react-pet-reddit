import React, { createContext, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUserData } from "../../hooks/useUserData";
import { getToken } from "../../store/store";

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}


export const userContext = createContext<IUserContextData>({});

export function UserContextProvider ({children}: {children: ReactNode}) {
  const [data] = useUserData()
  const dispatch = useDispatch();
  useEffect(() => {
    if(window?.__token__ === "undefined") return
    const token = window?.__token__ ?? "";
    dispatch(getToken(token))
  }, [])
  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}
import { useEffect } from "react";
import { meRequestAsync } from "../store/me/action";
import {  useDispatch, useSelector } from "react-redux";
import { TRootState } from "../store/store";
import { AnyAction } from "redux";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData () {
  const token: string = useSelector<TRootState, string>(state => state.token);
  const data = useSelector<TRootState, IUserData>(state => state.me.data);
  const dispatch = useDispatch();
    useEffect(() => {
      if(!token) return
      dispatch(meRequestAsync() as unknown as AnyAction);
    }, [token]);
    return [data]
}
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../store";

interface IUserData {
  name?: string;
  iconImg?: string;
}


export function useUserData () {
  const [data, setData] = useState<IUserData>({});
  const token = useSelector<TRootState, string>(state => state.token);
    useEffect(() => {
      axios.get('https://oauth.reddit.com/api/v1/me.json',
      {
        headers: { 'Authorization': `Bearer ${token}`},
      })
      .then((r) => {
        const userData = r.data;
        setData({ name: userData?.name, iconImg: userData?.snoovatar_img });
      })
      .catch(console.log)
      console.log(data)
    }, [token]);

  return [data];
}
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface IUserData {
  name?: string;
  iconImg?: string;
}


export function useUserData () {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext);
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
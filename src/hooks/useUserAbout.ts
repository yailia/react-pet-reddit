import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export function useUserAbout (username: string) {
  const token = useContext(tokenContext);
  const [userAbout, setUserAbout] = useState({});
  useEffect(() => {
    axios.get(`https://oauth.reddit.com//user/${username}/about.json`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/x-www-form-urlencoded',
      }
    })
      .then((r) => {
        setUserAbout(r.data.data);
    })
  }, [])
  return [userAbout];
}
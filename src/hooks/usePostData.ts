import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../store";

export function usePostData () {
  const token = useSelector<TRootState, string>(state => state.token);
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false)


  try {
    useEffect(() => {
      setLoading(true)
      axios.get('https://oauth.reddit.com/best.json?sr_detail=true',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/x-www-form-urlencoded',
        }
      })
        .then((r) => {
        setPostData(r?.data.data.children);
      })
      .finally(()=> setLoading(false))
    }, [token])
  }
  catch(e) {
    console.log(e)
  }
  return [{postData, loading}];
}
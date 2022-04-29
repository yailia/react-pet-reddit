import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export function usePostData () {
  const token = useContext(tokenContext);
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
    }, [])
  }
  catch(e) {
    console.log(e)
  }
  return [{postData, loading}];
}
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = dayjs(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setLoading(false);
        setIsError(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request canceled", e.message);
        } else {
          setIsError(true);
          setLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000);
    return () => {
      ourRequest.cancel("Operation canceled by the user.");
    };
  }, [url]);
  return { data, loading, isError };
};
export default useFetch;

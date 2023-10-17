import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (url, method, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios({
        method,
        url,
        data: body,
      });
      setData(response.data);
    } catch (error) {
      setError(!!error);
    } finally {
      setLoading(false);
    }
  }, [method, url, body]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const reFetch = useCallback(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  return { data, loading, error, reFetch };
};

export default useAxios;

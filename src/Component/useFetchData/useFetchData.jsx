

import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(data)

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      }
       catch (error) {
        setError(error);
      }
       finally {
        setLoading(false);
      }
    };

    fetchData(url);

  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
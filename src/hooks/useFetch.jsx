import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    (async () => {
      //anonymous function inside useEffect, so i can use async/await
      const response = await fetch(url);
      const result = await response.json();
      setState({ data: result, loading: false });
    })(); //IIFE
  }, []);

  return state;
};

export default useFetch;

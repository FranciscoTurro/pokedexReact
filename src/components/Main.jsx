import PokemonSmall from './PokemonSmall';
import { useState, useEffect } from 'react';

const Main = () => {
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=9'
  );
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();

  const [fetchInfo, setFetchInfo] = useState({ data: null, loading: true });
  useEffect(() => {
    (async () => {
      const response = await fetch(currentPage);
      const result = await response.json();
      setFetchInfo({ data: result, loading: false });
      setPreviousPage(result.previous);
      setNextPage(result.next);
    })();
  }, [currentPage]);
  if (fetchInfo.loading) return <div>loading...</div>;

  const listURL = fetchInfo.data.results.map((pokemon) => pokemon.url);

  return (
    <div>
      {previousPage && (
        <button onClick={() => setCurrentPage(previousPage)}>Previous</button>
      )}
      {nextPage && (
        <button onClick={() => setCurrentPage(nextPage)}>Next</button>
      )}
      {listURL.map((url) => (
        <PokemonSmall key={url} url={url} />
      ))}
    </div>
  );
};

export default Main;

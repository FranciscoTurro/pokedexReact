import PokemonSmall from './PokemonSmall';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon/'
  );

  const { data, loading } = useFetch(currentPage);

  if (loading) return <div>loading...</div>;

  const listURL = data.results.map((pokemon) => pokemon.url);

  return (
    <>
      {data.previous && (
        <button onClick={() => setCurrentPage(data.previous)}>Previous</button>
      )}
      {data.next && (
        <button onClick={() => setCurrentPage(data.next)}>Next</button>
      )}
      <div className="main">
        {listURL.map((url) => (
          <PokemonSmall key={url} url={url} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;

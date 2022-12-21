import { useEffect, useState } from 'react';
import './App.css';
import PokemonSmall from './components/PokemonSmall';
import useFetch from './hooks/useFetch';

const App = () => {
  const { data, loading } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  );

  if (loading) return <div>loading...</div>;

  const listURL = data.results.map((pokemon) => pokemon.url);

  return (
    <div>
      {listURL.map((url) => (
        <PokemonSmall key={url} url={url} />
      ))}
    </div>
  );
};

export default App;

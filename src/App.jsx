import { useEffect, useState } from 'react';
import './App.css';
import PokemonSmall from './components/PokemonSmall';
import useFetch from './hooks/useFetch';

const App = () => {
  const { data, loading } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  );

  if (loading) return <div>loading...</div>;

  const pokemonList = data.results.map((p) => p.url);

  const test = pokemonList.map((p) => useFetch(p));

  return test;
};

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import PokemonSmall from './components/PokemonSmall';

const App = () => {
  const { data, loading } = useFetch('https://pokeapi.co/api/v2/pokemon');
  return (
    <>
      <PokemonSmall info={useFetch('https://pokeapi.co/api/v2/pokemon/800/')} />
      <PokemonSmall info={useFetch('https://pokeapi.co/api/v2/pokemon/66/')} />
      <PokemonSmall info={useFetch('https://pokeapi.co/api/v2/pokemon/1/')} />
    </>
  );
};

export default App;

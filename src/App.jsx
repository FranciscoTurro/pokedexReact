import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import Pokemon from './components/Pokemon';

const App = () => {
  const { data, loading } = useFetch('https://pokeapi.co/api/v2/pokemon');
  return (
    <>
      <Pokemon info={useFetch('https://pokeapi.co/api/v2/pokemon/6/')} />
    </>
  );
};

export default App;

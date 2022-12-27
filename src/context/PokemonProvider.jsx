import { useEffect, useState } from 'react';
import PokemonContext from './PokemonContext';

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);

  const maxNumberOfPokemon = 905;

  const getPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${amount}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setPokemon([...pokemon, ...results]);
    setLoading(false);
  };

  const loadMorePokemon = () => {
    setAmount((amount) => amount + 50);
  };

  useEffect(() => {
    getPokemon();
  }, [amount]);

  return (
    <PokemonContext.Provider
      value={{ maxNumberOfPokemon, pokemon, loading, loadMorePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

import { useEffect, useState } from 'react';
import PokemonContext from './PokemonContext';

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonStopper, setButtonStopper] = useState(true);
  const [amount, setAmount] = useState(0);
  const [shiny, setShiny] = useState(false);

  const maxNumberOfPokemon = 905;

  const getPokemon = async () => {
    setButtonStopper(true);
    let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${amount}`;

    const res = await fetch(url);

    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setPokemon([...pokemon, ...results]);
    setLoading(false);
    setButtonStopper(false);
  };

  const loadMorePokemon = () => {
    setAmount((amount) => amount + 50);
  };

  const toggleShiny = () => {
    setShiny(!shiny);
  };

  useEffect(() => {
    getPokemon();
  }, [amount]);

  return (
    <PokemonContext.Provider
      value={{
        shiny,
        toggleShiny,
        maxNumberOfPokemon,
        pokemon,
        loading,
        loadMorePokemon,
        buttonStopper,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

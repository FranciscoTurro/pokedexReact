import { useEffect, useState, useRef } from 'react';
import PokemonContext from './PokemonContext';

const PokemonProvider = ({ children }) => {
  const amount = 50;
  const maxNumberOfPokemon = 905;

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonStopper, setButtonStopper] = useState(true);
  const [offset, setOffset] = useState(0);
  const [shiny, setShiny] = useState(false);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonLoaded, setPokemonLoaded] = useState(amount);

  const getPokemon = async () => {
    setButtonStopper(true);

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=${offset}`;

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

  const getAllPokemonNames = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${maxNumberOfPokemon}`;

    const res = await fetch(url);

    const data = await res.json();

    setPokemonNames(
      data.results.map((pokemon, index) => ({
        name: pokemon.name,
        id: index + 1,
      }))
    );
  };

  const loadMorePokemon = () => {
    setOffset((offset) => offset + amount);
  };

  const handleLoadMoreClick = () => {
    setPokemonLoaded((pokemonLoaded) => pokemonLoaded + amount);
    loadMorePokemon();
  };

  const toggleShiny = () => {
    setShiny(!shiny);
  };

  useEffect(() => {
    getPokemon();
  }, [offset]);

  useEffect(() => {
    getAllPokemonNames();
  }, []);

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
        amount,
        pokemonNames,
        pokemonLoaded,
        handleLoadMoreClick,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

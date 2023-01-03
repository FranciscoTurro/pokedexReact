import { useEffect, useState, useRef } from 'react';
import PokemonContext from './PokemonContext';

const PokemonProvider = ({ children }) => {
  const pokemonLoadLimit = 50;
  const maxNumberOfPokemon = 905;

  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonLoadedAmount, setPokemonLoadedAmount] =
    useState(pokemonLoadLimit);
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isShiny, setIsShiny] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const getPokemon = async () => {
    setIsButtonDisabled(true);

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonLoadLimit}&offset=${offset}`;

    const res = await fetch(url);

    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setPokemonList([...pokemonList, ...results]);
    setIsLoading(false);
    setIsButtonDisabled(false);
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
    setOffset((offset) => offset + pokemonLoadLimit);
  };

  const handleLoadMoreClick = () => {
    setPokemonLoadedAmount((pokemonLoaded) => pokemonLoaded + pokemonLoadLimit);
    loadMorePokemon();
  };

  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };

  const selectType = (type) => {
    setSelectedTypes(type);
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
        isShiny,
        toggleShiny,
        maxNumberOfPokemon,
        pokemonList,
        isLoading,
        loadMorePokemon,
        isButtonDisabled,
        pokemonLoadLimit,
        pokemonNames,
        pokemonLoadedAmount,
        handleLoadMoreClick,
        selectType,
        selectedTypes,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

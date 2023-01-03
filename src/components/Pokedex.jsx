import PokemonSmall from './PokemonSmall';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';

const Pokedex = () => {
  const {
    pokemonList,
    isLoading,
    isShiny,
    maxNumberOfPokemon,
    isButtonDisabled,
    handleLoadMoreClick,
    pokemonLoadedAmount,
    selectedTypes,
  } = useContext(PokemonContext);

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="main">
      <div className="pokedex">
        {selectedTypes.length > 0
          ? pokemonList.map((pokemon) => {
              if (
                pokemon.id <= maxNumberOfPokemon &&
                pokemon.types.some((type) =>
                  selectedTypes.includes(type.type.name)
                )
              ) {
                return (
                  <PokemonSmall
                    key={pokemon.id}
                    isShiny={isShiny}
                    pokemon={pokemon}
                  />
                );
              }
            })
          : pokemonList.map((pokemon) => {
              if (pokemon.id <= maxNumberOfPokemon) {
                return (
                  <PokemonSmall
                    key={pokemon.id}
                    isShiny={isShiny}
                    pokemon={pokemon}
                  />
                );
              }
            })}
      </div>
      <div className="loadBtnContainer">
        <button
          className="btn"
          disabled={
            pokemonLoadedAmount > maxNumberOfPokemon || isButtonDisabled
          }
          onClick={handleLoadMoreClick}
        >
          Load more Pokémon
        </button>
      </div>
    </div>
  );
};
export default Pokedex;

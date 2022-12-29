import PokemonSmall from './PokemonSmall';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';

const Pokedex = () => {
  const {
    pokemon,
    loading,
    shiny,
    maxNumberOfPokemon,
    buttonStopper,
    handleLoadMoreClick,
    pokemonLoaded,
  } = useContext(PokemonContext);

  if (loading) return <div>loading...</div>;

  return (
    <div className="main">
      <div className="pokedex">
        {pokemon.map((pokemon) => {
          if (pokemon.id <= maxNumberOfPokemon)
            return (
              <PokemonSmall key={pokemon.id} shiny={shiny} pokemon={pokemon} />
            );
        })}
      </div>
      <div className="loadBtnContainer">
        <button
          className="btn"
          disabled={pokemonLoaded > maxNumberOfPokemon || buttonStopper}
          onClick={handleLoadMoreClick}
        >
          Load more Pokémon
        </button>
      </div>
    </div>
  );
};

export default Pokedex;

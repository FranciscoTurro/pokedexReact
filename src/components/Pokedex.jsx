import PokemonSmall from './PokemonSmall';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';

const Pokedex = () => {
  const { pokemon, loading, loadMorePokemon, shiny } =
    useContext(PokemonContext);

  if (loading) return <div>loading...</div>;

  return (
    <div className="main">
      <div className="pokedex">
        {pokemon.map((pokemon) => (
          <PokemonSmall key={pokemon.id} shiny={shiny} pokemon={pokemon} />
        ))}
      </div>
      <button onClick={() => loadMorePokemon()}>Load more Pokémon</button>
    </div>
  );
};

export default Pokedex;

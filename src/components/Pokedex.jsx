import PokemonSmall from './PokemonSmall';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';

const Pokedex = () => {
  const { pokemon, loading, shiny } = useContext(PokemonContext);

  if (loading) return <div>loading...</div>;

  return (
    <div className="pokedex">
      {pokemon.map((pokemon) => (
        <PokemonSmall key={pokemon.id} shiny={shiny} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Pokedex;

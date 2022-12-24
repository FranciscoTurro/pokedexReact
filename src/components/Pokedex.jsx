import PokemonSmall from './PokemonSmall';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const Pokedex = () => {
  const { pokemon, loading, loadMorePokemon } = useContext(PokemonContext);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <button onClick={() => loadMorePokemon()}>test</button>
      <div className="main">
        {pokemon.map((pokemon) => (
          <PokemonSmall key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;

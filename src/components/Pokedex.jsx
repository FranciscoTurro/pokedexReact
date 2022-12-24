import PokemonSmall from './PokemonSmall';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const Pokedex = () => {
  const { pokemon, loading, loadMorePokemon } = useContext(PokemonContext);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <div className="main">
        {pokemon.map((pokemon) => (
          <PokemonSmall key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <button onClick={() => loadMorePokemon()}>test</button>
    </>
  );
};

export default Pokedex;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PokemonExtended from '../components/PokemonExtended';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  const getOnePokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    setLoading(false);
    setPokemon(data);
  };

  useEffect(() => {
    getOnePokemon(id);
  }, []);

  if (loading) return <div>loading...</div>;

  return <PokemonExtended pokemon={pokemon} />;
};

export default PokemonPage;

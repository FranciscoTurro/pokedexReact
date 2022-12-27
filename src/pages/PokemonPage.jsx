import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import PokemonExtended from '../components/PokemonExtended';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const { maxNumberOfPokemon } = useContext(PokemonContext);

  if (id > maxNumberOfPokemon || id < 1) navigate('/');

  const getOnePokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    setLoading(false);
    setPokemon(data);
  };

  useEffect(() => {
    getOnePokemon(id);
  }, [id]);

  if (loading) return <div>loading...</div>;

  return <PokemonExtended pokemon={pokemon} />;
};

export default PokemonPage;

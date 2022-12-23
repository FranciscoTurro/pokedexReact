import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';

const PokemonPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (loading) return <div>loading...</div>;
  return <div>{JSON.stringify(data.name)}</div>;
};

export default PokemonPage;

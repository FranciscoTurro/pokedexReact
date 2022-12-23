import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';

const PokemonPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return <div>2</div>;
};

export default PokemonPage;

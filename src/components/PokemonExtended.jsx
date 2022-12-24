import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router';

const PokemonExtended = ({ id }) => {
  const navigate = useNavigate();

  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <button onClick={() => navigate('/')}>BACK</button>
      {JSON.stringify(data.name)}
    </div>
  );
};

export default PokemonExtended;

import { useParams } from 'react-router';
import PokemonExtended from '../components/PokemonExtended';

const PokemonPage = () => {
  const { id } = useParams();
  return <PokemonExtended id={id} />;
};

export default PokemonPage;

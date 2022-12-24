import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonExtended = ({ id }) => {
  const { getPokemonByID } = useContext(PokemonContext);

  const test = getPokemonByID(id);

  return <div>{test.value.name}</div>;
};

export default PokemonExtended;

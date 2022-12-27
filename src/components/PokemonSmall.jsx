import { Link } from 'react-router-dom';
import uppercase from '../util/uppercase';

const PokemonSmall = ({ pokemon }) => {
  const {
    name,
    sprites: { front_default },
    id,
  } = pokemon;

  return (
    <Link to={`/pokemon/${id}`} className="card-pokemon">
      <div className="pokemon">
        <img className="pokeIMG" src={front_default} alt={name} />
        <div>{uppercase(name)}</div>
      </div>
    </Link>
  );
};

export default PokemonSmall;

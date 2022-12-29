import { Link } from 'react-router-dom';
import uppercase from '../util/uppercase';

const PokemonSmall = ({ pokemon, isShiny }) => {
  const {
    name,
    sprites: { front_default, front_shiny },
    id,
  } = pokemon;

  return (
    <Link to={`/pokemon/${id}`} className="card-pokemon">
      <div className="pokemon">
        <img
          className="pokeIMG"
          src={isShiny ? front_shiny : front_default}
          alt={name}
        />
        <div>{uppercase(name)}</div>
      </div>
    </Link>
  );
};

export default PokemonSmall;

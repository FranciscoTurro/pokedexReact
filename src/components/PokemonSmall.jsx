import { Link } from 'react-router-dom';
import uppercase from '../util/uppercase';

const PokemonSmall = ({ pokemon, isShiny }) => {
  const {
    name,
    sprites: { front_default, front_shiny },
    id,
    types,
  } = pokemon;

  const typesList = types.map((p) => (
    <span className={`badge ${p.type.name}`} key={p.type.name}>
      {uppercase(p.type.name)}
    </span>
  ));

  return (
    <Link to={`/pokemon/${id}`} className="card-pokemon">
      <div className="pokemon">
        <img
          className="pokeIMG"
          src={isShiny ? front_shiny : front_default}
          alt={name}
        />
        <div>{uppercase(name)}</div>
        <div>{typesList}</div>
      </div>
    </Link>
  );
};

export default PokemonSmall;

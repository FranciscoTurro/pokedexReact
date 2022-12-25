import { Link } from 'react-router-dom';

const PokemonSmall = ({ pokemon }) => {
  const {
    name,
    sprites: { front_default },
    id,
  } = pokemon;

  return (
    <Link to={`/pokemon/${id}`} className="card-pokemon">
      <div className="pokemon">
        <img src={front_default} alt={name} />
        <div>{name}</div>
      </div>
    </Link>
  );
};

export default PokemonSmall;

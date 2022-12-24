import { Link } from 'react-router-dom';

const PokemonSmall = ({ pokemon }) => {
  const {
    name,
    sprites: { front_default },
    types,
    id,
  } = pokemon;

  const typesList = types.map((p) => (
    <div key={p.type.name}>{p.type.name}</div>
  ));

  return (
    <Link to={`/pokemon/${id}`} className="card-pokemon">
      <div className="pokemon">
        <img src={front_default} alt={name} />
        <div>Nº {id}</div>
        <div>{name}</div>
        {typesList}
      </div>
    </Link>
  );
};

export default PokemonSmall;

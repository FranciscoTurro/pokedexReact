import uppercase from '../util/uppercase';
import normalizeNum from '../util/normalizeNum';
import { useNavigate } from 'react-router';

const PokemonExtended = ({ pokemon }) => {
  const navigate = useNavigate();

  const maxNumberOfPokemon = 905;

  const {
    name,
    id,
    height,
    weight,
    types,
    sprites: {
      other: {
        'official-artwork': { front_default },
      },
    },
  } = pokemon;

  const typesList = types.map((p) => (
    <div className={`type-${p.type.name}`} key={p.type.name}>
      {uppercase(p.type.name)}
    </div>
  ));

  return (
    <div className="pokemonExtended">
      <div className="buttonContainer">
        {id - 1 !== 0 && (
          <button onClick={() => navigate(`/pokemon/${id - 1}`)}>
            Previous Pokémon
          </button>
        )}
        {id + 1 <= maxNumberOfPokemon && (
          <button onClick={() => navigate(`/pokemon/${id + 1}`)}>
            Next Pokémon
          </button>
        )}
      </div>
      <div>{`${uppercase(name)} N.º ${id}`}</div>
      <div className="picInfoContainer">
        <img src={front_default} alt={`Image of Pokemon ${name}`} />
        <div className="infoContainer">
          <div className="extendedInfo">
            <div>{`Height: ${normalizeNum(height)} m`}</div>
            <div>{`Weight: ${normalizeNum(weight)} kg`}</div>
          </div>
          <div className="typesContainer">{typesList}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonExtended;

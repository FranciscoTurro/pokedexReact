import uppercase from '../util/uppercase';
import normalizeNum from '../util/normalizeNum';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonExtended = ({ pokemon }) => {
  const navigate = useNavigate();

  const { maxNumberOfPokemon } = useContext(PokemonContext);

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
    abilities,
  } = pokemon;

  const mainAbility = abilities[0].ability.name;

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
            <div className="infoDiv">
              <div className="infoTitle">Height</div>
              <div className="infoInfo">{normalizeNum(height)} m</div>
            </div>
            <div className="infoDiv">
              <div className="infoTitle">Ability</div>
              <div className="infoInfo">{uppercase(mainAbility)}</div>
            </div>
            <div className="infoDiv">
              <div className="infoTitle">Weight</div>
              <div className="infoInfo">{normalizeNum(weight)} kg</div>
            </div>
          </div>
          <div className="typesContainer">{typesList}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonExtended;

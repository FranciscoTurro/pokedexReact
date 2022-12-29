import uppercase from '../util/uppercase';
import normalizeNum from '../util/normalizeNum';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import InfoDiv from './InfoDiv';
import EvolutionChain from './EvolutionChain';

const PokemonExtended = ({ pokemon }) => {
  const navigate = useNavigate();

  const { maxNumberOfPokemon } = useContext(PokemonContext);

  const {
    name,
    id,
    height,
    weight,
    types,
    abilities,
    stats,
    sprites: {
      other: {
        'official-artwork': { front_default },
      },
    },
  } = pokemon;

  let mainAbility;
  if (abilities[0]) {
    mainAbility = abilities[0].ability.name;
  } else {
    mainAbility = 'None';
  }

  const typesList = types.map((p) => (
    <div className={`type-${p.type.name}`} key={p.type.name}>
      {uppercase(p.type.name)}
    </div>
  ));

  const statsList = stats.map((stat) => {
    if (
      stat.stat.name === 'special-attack' ||
      stat.stat.name === 'special-defense' ||
      stat.stat.name === 'speed'
    )
      return;
    return (
      <div key={stat.stat.name}>
        {uppercase(stat.stat.name)}: {stat.base_stat}
      </div>
    );
  });

  return (
    <div className="pokemonExtended">
      <div className="nameButtonContainer">
        <button
          className="btn"
          disabled={id - 1 === 0}
          onClick={() => navigate(`/pokemon/${id - 1}`)}
        >
          Previous Pokémon
        </button>

        <div className="pokemonName">{`${uppercase(name)} N.º ${id}`}</div>

        <button
          className="btn"
          disabled={id + 1 > maxNumberOfPokemon}
          onClick={() => navigate(`/pokemon/${id + 1}`)}
        >
          Next Pokémon
        </button>
      </div>
      <div className="picInfoContainer">
        <img src={front_default} alt={`Image of Pokemon ${name}`} />
        <div className="infoContainer">
          <div className="extendedInfo">
            <InfoDiv title={'Height'} info={normalizeNum(height) + ' m'} />
            <InfoDiv title={'Main ability'} info={uppercase(mainAbility)} />
            <InfoDiv title={'Weight'} info={normalizeNum(weight) + ' kg'} />
            <InfoDiv title={'Main stats'} info={statsList} />
          </div>
          <div className="typesContainer">{typesList}</div>
        </div>
      </div>
      <EvolutionChain pokemon={pokemon} />
    </div>
  );
};

export default PokemonExtended;

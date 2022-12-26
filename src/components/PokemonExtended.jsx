import uppercase from '../util/uppercase';
import normalizeNum from '../util/normalizeNum';

const PokemonExtended = ({ pokemon }) => {
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
    <div>
      <div>{`${uppercase(name)} N.º ${id}`}</div>
      <div>
        <img src={front_default} alt={`Image of Pokemon ${name}`} />
        <div>
          <div>{`Height: ${normalizeNum(height)} m`}</div>
          <div>{`Weight: ${normalizeNum(weight)} kg`}</div>
          <div>
            <div>{typesList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonExtended;

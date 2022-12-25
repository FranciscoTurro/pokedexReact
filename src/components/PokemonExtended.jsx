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

  const typesList = types.map((p) => <li key={p.type.name}>{p.type.name}</li>);

  return <div>{name}</div>;
};

export default PokemonExtended;

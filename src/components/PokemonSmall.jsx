import useFetch from '../hooks/useFetch';

const PokemonSmall = ({ url }) => {
  const { data, loading } = useFetch(url);

  if (loading) return <div>loading...</div>;

  const {
    name,
    sprites: { front_default },
    types,
  } = data;

  const typesList = types.map((p) => <li key={p.type.name}>{p.type.name}</li>);

  return (
    <div>
      {name}
      <img src={front_default} alt={name} />
      <ul>{typesList}</ul>
    </div>
  );
};

export default PokemonSmall;

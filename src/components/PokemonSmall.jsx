import useFetch from '../hooks/useFetch';

const PokemonSmall = ({ url }) => {
  const { data, loading } = useFetch(url);

  if (loading) return <div>loading...</div>;

  const {
    name,
    sprites: { front_default },
    types,
    id,
  } = data;

  const typesList = types.map((p) => (
    <div key={p.type.name}>{p.type.name}</div>
  ));

  return (
    <div className="pokemon">
      <img src={front_default} alt={name} />
      <div>{name}</div>
      {typesList}
    </div>
  );
};

export default PokemonSmall;

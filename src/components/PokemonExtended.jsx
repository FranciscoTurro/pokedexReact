import useFetch from '../hooks/useFetch';

const PokemonExtended = ({ id }) => {
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (loading) return <div>loading...</div>;

  return <div>{JSON.stringify(data.name)}</div>;
};

export default PokemonExtended;

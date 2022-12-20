const Pokemon = ({ info }) => {
  const { loading, data } = info;

  return <div>{loading ? 'loading...' : data.name}</div>;
};

export default Pokemon;

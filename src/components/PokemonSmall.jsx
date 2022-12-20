const PokemonSmall = ({ info }) => {
  const { loading, data } = info;

  return (
    <>
      {loading ? (
        'loading...'
      ) : (
        <div>
          {data.name}
          <img src={data.sprites.front_default} alt="" />
          <ul>
            {data.types.map((t) => (
              <li key={t.type.name}>{t.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default PokemonSmall;

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import PokemonExtended from '../components/PokemonExtended';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import uppercase from '../util/uppercase';

const PokemonPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(true);
  const { maxNumberOfPokemon } = useContext(PokemonContext);

  if (id > maxNumberOfPokemon || id < 1) navigate('/');

  const getOnePokemon = async (id) => {
    setDisableButton(true);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    setIsLoading(false);
    setPokemon(data);
    setDisableButton(false);
  };

  useEffect(() => {
    getOnePokemon(id);
  }, [id]);

  if (isLoading) return <div>loading....</div>;

  return (
    <>
      <div className="nameButtonContainer">
        <button
          className="btn"
          disabled={Number(id) - 1 === 0 || disableButton}
          onClick={() => navigate(`/pokemon/${Number(id) - 1}`)}
        >
          Previous Pokémon
        </button>

        <div className="pokemonName">{`${uppercase(
          pokemon.name
        )} N.º ${id}`}</div>

        <button
          className="btn"
          disabled={Number(id) + 1 > maxNumberOfPokemon || disableButton}
          onClick={() => navigate(`/pokemon/${Number(id) + 1}`)}
        >
          Next Pokémon
        </button>
      </div>
      <PokemonExtended pokemon={pokemon} />;
    </>
  );
};

export default PokemonPage;

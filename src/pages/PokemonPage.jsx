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
    const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeData = await pokeRes.json();

    const speciesRes = await fetch(pokeData.species.url);
    const speciesData = await speciesRes.json();

    let flavorTextEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === 'en' && entry.version.name === 'x'
    );
    if (flavorTextEntry === undefined)
      flavorTextEntry = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === 'en'
      );

    const flavorText = flavorTextEntry.flavor_text;
    pokeData.flavorText = flavorText;

    setIsLoading(false);
    setPokemon(pokeData);
    setDisableButton(false);
  };

  useEffect(() => {
    getOnePokemon(id);
  }, [id]);

  if (isLoading) return <div>loading....</div>;

  return (
    <div className="pokemonPage">
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
      <PokemonExtended pokemon={pokemon} />
    </div>
  );
};

export default PokemonPage;

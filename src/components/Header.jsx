import { Outlet, useNavigate, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';
import PokeInput from './PokeInput';

const Header = () => {
  const {
    toggleShiny,
    loadMorePokemon,
    maxNumberOfPokemon,
    buttonStopper,
    amount,
    shiny,
    pokemonNames,
  } = useContext(PokemonContext);

  const [pokemonLoaded, setPokemonLoaded] = useState(amount);

  const navigate = useNavigate();

  const handleClick = () => {
    setPokemonLoaded((pokemonLoaded) => pokemonLoaded + amount);
    loadMorePokemon();
  };

  return (
    <div className="header">
      <div className="headerBtnLogoContainer">
        <img
          src="../src/assets/img/pokeball.png"
          alt="pokedex"
          onClick={() => navigate('/')}
        />
        <div className="headerBtnContainer">
          <button
            className="btn"
            disabled={useLocation().pathname !== '/'}
            onClick={toggleShiny}
          >
            {shiny ? 'Regular sprites' : 'Shiny sprites'}
          </button>

          <button
            className="btn"
            disabled={pokemonLoaded > maxNumberOfPokemon || buttonStopper}
            onClick={handleClick}
          >
            Load more Pokémon
          </button>
        </div>
      </div>
      <div className="suggestion-input">
        <PokeInput array={pokemonNames} />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;

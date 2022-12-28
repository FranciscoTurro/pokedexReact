import { Outlet, useNavigate, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';

const Header = () => {
  const {
    toggleShiny,
    loadMorePokemon,
    maxNumberOfPokemon,
    buttonStopper,
    amount,
    shiny,
  } = useContext(PokemonContext);

  const [pokemonLoaded, setPokemonLoaded] = useState(amount);

  const navigate = useNavigate();

  const handleClick = () => {
    setPokemonLoaded((pokemonLoaded) => pokemonLoaded + amount);
    loadMorePokemon();
  };

  return (
    <div className="header">
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
      <Outlet />
    </div>
  );
};

export default Header;

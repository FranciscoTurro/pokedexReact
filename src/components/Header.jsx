import { Outlet, useNavigate, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';

const Header = () => {
  const { toggleShiny, loadMorePokemon, maxNumberOfPokemon, buttonStopper } =
    useContext(PokemonContext);

  const [pokemonLoaded, setPokemonLoaded] = useState(50);

  const navigate = useNavigate();

  const handleClick = () => {
    setPokemonLoaded((pokemonLoaded) => pokemonLoaded + 50);
    loadMorePokemon();
  };

  return (
    <div className="header">
      <img
        src="../src/assets/img/pokeball.png"
        alt="pokedex"
        onClick={() => navigate('/')}
      />
      <button disabled={useLocation().pathname !== '/'} onClick={toggleShiny}>
        Shiny sprites
      </button>
      <button
        disabled={pokemonLoaded > maxNumberOfPokemon || buttonStopper}
        onClick={handleClick}
      >
        Load more Pokémon
      </button>

      <Outlet />
    </div>
  );
};

export default Header;

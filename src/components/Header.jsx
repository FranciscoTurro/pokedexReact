import { Outlet, useNavigate, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';
import AutocompleteInput from './AutocompleteInput';

const Header = () => {
  const { toggleShiny, isShiny, pokemonNames } = useContext(PokemonContext);

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="headerBtnLogoContainer">
        <img
          src="../src/assets/img/pokeball.png"
          alt="pokedex"
          onClick={() => navigate('/')}
        />
        <div className="headerBtnContainer">
          {useLocation().pathname === '/' && (
            <button className="btn" onClick={toggleShiny}>
              {isShiny ? 'Regular sprites' : 'Shiny sprites'}
            </button>
          )}
        </div>
      </div>
      <div className="suggestion-input">
        <AutocompleteInput array={pokemonNames} />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;

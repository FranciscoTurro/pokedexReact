import { Outlet, useNavigate, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';

const Header = () => {
  const { toggleShiny } = useContext(PokemonContext);

  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        src="../src/assets/img/pokeball.png"
        alt="pokedex"
        onClick={() => navigate('/')}
      />
      {useLocation().pathname === '/' && (
        <button onClick={toggleShiny}>Shiny sprites</button>
      )}

      <Outlet />
    </div>
  );
};

export default Header;

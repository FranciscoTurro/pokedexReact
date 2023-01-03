import { Outlet, useNavigate, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';
import AutocompleteInput from './AutocompleteInput';
import uppercase from '../util/uppercase';

const Header = () => {
  const {
    toggleShiny,
    isShiny,
    pokemonNames,
    selectType,
    types,
    selectedTypes,
  } = useContext(PokemonContext);

  const navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(false);

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
          {useLocation().pathname === '/' && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn"
            >
              Filter
            </button>
          )}
          {showFilters && (
            <div className="filters">
              {types.map((type) => (
                <label key={type} htmlFor={`${type}Checkbox`}>
                  <input
                    type="checkbox"
                    id={`${type}Checkbox`}
                    onClick={(event) => {
                      if (event.target.checked) {
                        selectType([...selectedTypes, type]);
                      }
                      if (!event.target.checked) {
                        const newTypes = selectedTypes.filter(
                          (element) => element !== type
                        );
                        selectType(newTypes);
                      }
                    }}
                  />
                  {uppercase(type)}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <AutocompleteInput array={pokemonNames} />

      <Outlet />
    </div>
  );
};

export default Header;

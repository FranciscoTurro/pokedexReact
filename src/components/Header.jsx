import { Outlet, useNavigate, useLocation } from 'react-router';
import { useContext, useState, useRef, useEffect } from 'react';
import PokemonContext from '../context/PokemonContext';
import AutocompleteInput from './AutocompleteInput';
import uppercase from '../util/uppercase';
import pokeball from '../assets/img/pokeball.png';

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

  const inputRef = useRef(null);
  const filterButtonRef = useRef(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        event.target !== filterButtonRef.current
      ) {
        setShowFilters(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className="header">
      <div className="headerBtnLogoContainer">
        <img src={pokeball} alt="pokedex" onClick={() => navigate('/')} />
        <div className="headerBtnContainer">
          {useLocation().pathname === '/' && (
            <button className="btn" onClick={toggleShiny}>
              {isShiny ? 'Regular sprites' : 'Shiny sprites'}
            </button>
          )}
          {useLocation().pathname === '/' && (
            <button
              ref={filterButtonRef}
              onClick={() => setShowFilters(!showFilters)}
              className="btn"
            >
              Filter
            </button>
          )}
          {showFilters && (
            <div className="filters" ref={inputRef}>
              {types.map((type) => (
                <label key={type} htmlFor={`${type}Checkbox`}>
                  <input
                    type="checkbox"
                    id={`${type}Checkbox`}
                    defaultChecked={selectedTypes.includes(type)}
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

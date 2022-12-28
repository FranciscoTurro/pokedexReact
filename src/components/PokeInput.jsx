import { useState, useRef, useEffect } from 'react';
import uppercase from '../util/uppercase';
import { useNavigate } from 'react-router';

const PokeInput = ({ array }) => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        !event.target.closest('ul')
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value === '') {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = array.filter((suggestion) =>
      suggestion.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (selectedIndex < suggestions.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (selectedIndex >= 0) {
        setInputValue('');
        navigate(
          `/pokemon/${
            array.find(
              (element) => element.name === suggestions[selectedIndex].name
            ).id
          }`
        );
        setSuggestions([]);
        setSelectedIndex(-1);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue('');
    navigate(`/pokemon/${suggestion.id}`);
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.id}
              onMouseDown={() => handleSuggestionClick(suggestion)}
              className={index === selectedIndex ? 'selected' : ''}
            >
              {uppercase(suggestion.name)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokeInput;

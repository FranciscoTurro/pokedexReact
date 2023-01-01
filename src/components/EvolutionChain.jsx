import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getNumberFromString from '../util/getNumberFromString';
import uppercase from '../util/uppercase';

const PokemonSmallSimple = ({ pokemon }) => {
  const {
    name,
    sprites: { front_default },
    id,
  } = pokemon;

  return (
    <Link
      to={`/pokemon/${id}`}
      style={{ cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}
    >
      <div className="pokemon">
        <img className="pokeIMG" src={front_default} alt={name} />
        <div>{uppercase(name)}</div>
      </div>
    </Link>
  );
};

const EvolutionChain = ({ pokemon }) => {
  const [evolutionLine, setEvolutionLine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEvolutionLine = async (pokemon) => {
    setIsLoading(true);

    const evolutionLine = [];

    const getEvolutions = (currentEvolution) => {
      const pokemonID = getNumberFromString(currentEvolution.species.url);
      evolutionLine.push(pokemonID);
      if (currentEvolution.evolves_to.length === 0) {
        return;
      } else if (currentEvolution.evolves_to.length === 1) {
        getEvolutions(currentEvolution.evolves_to[0]);
      } else {
        currentEvolution.evolves_to.forEach((evolution) => {
          getEvolutions(evolution);
        });
      }
    };

    const res = await fetch(pokemon.species.url);
    const species = await res.json();

    if (!species.evolution_chain) {
      setEvolutionLine([pokemon]);
      setIsLoading(false);
      return;
    }

    const evolutionChainID =
      species.evolution_chain.url.split('/')[
        species.evolution_chain.url.split('/').length - 2
      ];

    const evolutionChainResponse = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${evolutionChainID}`
    );
    const evolutionChain = await evolutionChainResponse.json();

    let currentEvolution = evolutionChain.chain;
    getEvolutions(currentEvolution);

    Promise.all(
      evolutionLine.map(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();
        return data;
      })
    ).then((array) => {
      setEvolutionLine(array);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getEvolutionLine(pokemon);
  }, [pokemon]);

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="evolutionChainContainer">
      <p>{uppercase(pokemon.name)}'s evolution family</p>
      <div className="evolutionChain">
        {evolutionLine.map((pokemon) => {
          return <PokemonSmallSimple key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default EvolutionChain;

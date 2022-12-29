import { useState, useEffect } from 'react';
import PokemonSmall from './PokemonSmall';

const EvolutionChain = ({ pokemon }) => {
  const [evolutionLine, setEvolutionLine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEvolutionLine = async (pokemon) => {
    setIsLoading(true);
    const res = await fetch(pokemon.species.url);
    const species = await res.json();

    const evolutionChainID =
      species.evolution_chain.url.split('/')[
        species.evolution_chain.url.split('/').length - 2
      ];
    const evolutionChainResponse = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${evolutionChainID}`
    );
    const evolutionChain = await evolutionChainResponse.json();

    const evolutionLine = [];

    let currentEvolution = evolutionChain.chain;
    while (currentEvolution !== null) {
      evolutionLine.push(currentEvolution.species.name);
      currentEvolution = currentEvolution.evolves_to[0] || null;
    }

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
    <div className="evolutionChain">
      {evolutionLine.map((pokemon) => {
        return (
          <PokemonSmall key={pokemon.id} isShiny={false} pokemon={pokemon} />
        );
      })}
    </div>
  );
};

export default EvolutionChain;

//foreach in the array fetch the pokemon and return a variable with all of the PokemonSmall
// trata de no usar la solucion esta porque no entendes un pomo.

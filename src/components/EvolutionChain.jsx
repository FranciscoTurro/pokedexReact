import { useState, useEffect } from 'react';
import PokemonSmall from './PokemonSmall';

const EvolutionChain = ({ pokemon }) => {
  const [evolutionLine, setEvolutionLine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEvolutionLine = async (pokemon) => {
    setIsLoading(true);

    const evolutionLine = [];

    const getEvolutions = (currentEvolution) => {
      evolutionLine.push(currentEvolution.species.name);
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

import { useState, useEffect } from 'react';

const EvolutionChain = ({ pokemon }) => {
  const [evolutionLine, setEvolutionLine] = useState([]);

  useEffect(() => {
    (async () => {
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

      setEvolutionLine(evolutionLine);
    })();
  }, [pokemon]);

  return <div>{evolutionLine.join(', ')}</div>;
};

export default EvolutionChain;

//think how to move this to provider

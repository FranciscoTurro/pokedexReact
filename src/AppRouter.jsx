import { Route, Routes } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokemonPage from './pages/PokemonPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />}>
        <Route path="pokemon" element={<PokemonPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

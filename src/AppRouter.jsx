import { Route, Routes } from 'react-router-dom';
import PokemonPage from './pages/PokemonPage';
import HomePage from './pages/HomePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
    </Routes>
  );
};

export default AppRouter;

import { Route, Routes, Navigate } from 'react-router-dom';
import PokemonPage from './pages/PokemonPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;

import { Outlet, useNavigate, useLocation } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        src="../src/assets/img/pokeball.png"
        alt="pokedex"
        onClick={() => navigate('/')}
      />
      <Outlet />
    </div>
  );
};

export default Header;

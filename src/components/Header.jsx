import { Outlet, useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      Header
      <button onClick={() => navigate('/')}>Back to home</button>
      <Outlet />
    </div>
  );
};

export default Header;
